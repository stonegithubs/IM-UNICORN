var vm = new Vue({
    el: '#index',
    data: {
        markets: [],
        notices: []
    },
    created: function () {
        var _this = this;

        _this.notices = [
            {id:0,title:"关于火币全球站暂停ELA充提业务的公告",url:"javascript:void(0);"},
            {id:1,title:"关于火币全球站开通BSV提币业务的公告",url:"javascript:void(0);"},
            {id:2,title:"火币全球站关于恢复 NEO、GAS、DBC和PHX充提业务的公告",url:"javascript:void(0);"},
            {id:3,title:"关于恢复杠杆借贷起点和BCH杠杆借贷业务的公告",url:"javascript:void(0);"},
        ];
        $('#notice_top_box').css('display','block');

        var req = {symbol:"USDT"};
        $.ajax({
            type:'POST',
            contentType: 'application/json;charset=utf-8',
            url:'/api/Common/getToken',
            data:JSON.stringify(req),
            dataType:'json',
            success:function(result){
                if(result.return_code == 200){
                    req.token = result.data;
                    $.ajax({
                        type:'POST',
                        contentType: 'application/json;charset=utf-8',
                        url:'/api/Quote/listMarket',
                        data:JSON.stringify(req),
                        dataType:'json',
                        success:function(res){
                            if(res.return_code == 200){
                                var markets = [];
                                for(var i = 0; i < 5; i++){
                                    //res.data[i].increase = (( res.data[i].newPrice - res.data[i].openPrice ) / res.data[i].openPrice * 100).toFixed(2);
                                    res.data[i].upgad = (res.data[i].newPrice - res.data[i].openPrice).toFixed(2);
                                    //res.data[i].calcAmount = (res.data[i].newPrice * 6.8).toFixed(2);
                                    var baseCurrency = res.data[i].symbol.substr(0, res.data[i].symbol.indexOf("USDT"));
                                    var quoteCurrency = "USDT";
                                    if(baseCurrency == ""){
                                        //不是USDT
                                        baseCurrency = res.data[i].symbol.substr(0, res.data[i].symbol.indexOf("BTC"));
                                        quoteCurrency = "BTC";
                                    }
                                    res.data[i].baseCurrency = baseCurrency;
                                    res.data[i].quoteCurrency = quoteCurrency;

                                    if(res.data[i].increase > 0){
                                        res.data[i].increaseStr = "change change_p up";
                                        res.data[i].upgadStr = "change up";
                                    }else if(res.data[i].increase < 0){
                                        res.data[i].increaseStr = "change change_p down";
                                        res.data[i].upgadStr = "change down";
                                    }else{
                                        res.data[i].increaseStr = "";
                                        res.data[i].upgadStr = "";
                                    }
                                    res.data[i].qty = (res.data[i].qty / 8).toFixed(4);
                                    var item = res.data[i];
                                    markets.push(item);
                                }
                                _this.markets = markets;
                                $('#market_ticker').css('display','block');
                                initAngularWebsocket();
                            }
                        },
                        error: function (xhr) {
                            console.log(xhr);
                        }
                    });
                }
            },
            error: function (xhr) {
                console.log(xhr);
            }
        });


    }
});

function handleData(data){
    if(data != undefined) {
        var quot = JSON.parse(data);
        if(quot.Ins != "BTCUSDT" && quot.Ins != "ETHUSDT" && quot.Ins != "EOSUSDT" && quot.Ins != "XRPUSDT" && quot.Ins != "LTCUSDT" && quot.Ins != "DASHUSDT" && quot.Ins != "ZECUSDT" && quot.Ins != "BCHUSDT" && quot.Ins != "ETCUSDT" && quot.Ins != "NEOUSDT" && quot.Ins != "ETHBTC"){
            return false;
        }
        var baseCurrency = quot.Ins.substr(0, quot.Ins.indexOf("USDT"));
        var quoteCurrency = "USDT";
        if(baseCurrency == ""){
            //不是USDT
            baseCurrency = quot.Ins.substr(0, quot.Ins.indexOf("BTC"));
            quoteCurrency = "BTC";
        }
        var tabItem = {
            'symbol':quot.Ins,
            'baseCurrency':baseCurrency ,
            'quoteCurrency':quoteCurrency ,
            'increase':(( quot.Last - quot.Open ) / quot.Open * 100).toFixed(2),
            'newPrice':quot.Last,
            'calcAmount':(quot.Last * 6.8).toFixed(2),
            'highPrice':quot.High,
            'lowPrice':quot.Low,
            'openPrice':quot.Open,
            'qty': (quot.Amt / 8).toFixed(4),
            'nqty': quot.Vol,
            'upgad':(quot.Last - quot.Open).toFixed(2),
            'contDate':quot.Time.substr(0,4) + quot.Time.substr(5,2) + quot.Time.substr(8,2),
            'contTime':quot.Time.substr(11,2) + quot.Time.substr(14,2) + quot.Time.substr(17,2),
        };
        if(tabItem.increase >= 0){
            tabItem.increaseStr = "change change_p up";
            tabItem.upgadStr = "change up";
        }else{
            tabItem.increaseStr = "change change_p down";
            tabItem.upgadStr = "change down";
        }

        for(var i = 0 ; i < vm.markets.length; i++){
            if(vm.markets[i].symbol == tabItem.symbol){
                Vue.set(vm.markets, i, tabItem)
            }
        }

    }
}

function initAngularWebsocket(){
    var that = this;
    var lockReconnect = false; //避免重复连接
    var wsUrl = "ws://47.52.162.169:8080/OPT-WEB-CQTS/websocket/quote";
    function createWebSocket(url) {
        try {
            that.ws = new WebSocket(url);
            initEventHandle();
        }
        catch (e) {
            if (!that.isWSClosed)
                reconnect(url);
        }
    }
    function initEventHandle() {
        that.ws.onclose = function () {
            console.log("onclose");
            if (!that.isWSClosed)
                reconnect(wsUrl);
        };
        that.ws.onerror = function () {
            console.log("onerror");
            if (!that.isWSClosed)
                reconnect(wsUrl);
        };
        that.ws.onopen = function () {
            console.log("onopen");
            //心跳检测重置
            if (!that.isWSClosed)
                that.wsheartCheck.reset().start();
        };
        that.ws.onmessage = function (event) {
            //如果获取到消息，心跳检测重置
            //拿到任何消息都说明当前连接是正常的
            if (!that.isWSClosed) {
                that.wsheartCheck.reset().start();
                var result = '';
                var reader = new FileReader();
                //FileReader：从Blob对象中读取数据
                reader.onload = function() {
                    result = pako.inflate(reader.result,{to:'string'});
                    handleData(result)
                }
                reader.readAsBinaryString(event.data);
            }
        };
    }
    function reconnect(url) {
        if (lockReconnect)
            return;
        lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多
        setTimeout(function () {
            createWebSocket(url);
            lockReconnect = false;
        }, 2000);
    }
    //心跳检测
    that.wsheartCheck = {
        timeout: 1000,
        timeoutObj: null,
        reset: function () {
            clearTimeout(this.timeoutObj);
            return this;
        },
        start: function () {
            this.timeoutObj = setTimeout(function () {
                //这里发送一个心跳，后端收到后，返回一个心跳消息，
                //onmessage拿到返回的心跳就说明连接正常
                if (that.ws != null)
                    that.ws.send("ping");
                // ws.send("");
            }, this.timeout);
        }
    };
    createWebSocket(wsUrl);
}



