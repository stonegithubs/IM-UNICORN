var vm = new Vue({
    el: '#markets',
    data: {
        symbol: "USDT",
        markets: [],
        symbol_list: [],
        symbol_data:{
            baseCurrency:"",
            quoteCurrency:"",
            newPrice:"",
            newPriceStr:"",
            qty:"",
            increase:"",
        },
    },
    created: function () {
        var _this = this;
        load_symbol_list({symbol:_this.symbol});
    }
});

function load_right_box(item){
    if(item.increase > 0){
        item.increaseStr = "increase rate up";
    }else if(item.increase < 0){
        item.increaseStr = "increase rate down";
    }else{
        item.increaseStr = "";
    }

    item.name = "比特币（Bitcoin）";
    item.issue_date = "2008-11-1";
    item.total_amount = "2100万";
    item.circulation = "1673.82万";
    item.web_url = "https://bitcoin.org/en/";
    item.white_paper_url = "https://bitcoin.org/bitcoin.pdf";
    item.block_explorer_url = "https://blockchain.info/";
    item.intro = "比特币（Bitcoin，简称BTC）是目前使用最为广泛的一种数字货币，它诞生于2009年1月3日，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。比特币网络每10分钟释放出一定数量币，预计在2140年达到极限。比特币被投资者称为“数字黄金”。比特币依据特定算法，通过大量的计算产生，不依靠特定货币机构发行，其使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学设计确保货币流通各个环节安全性，可确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实拥有者转移、支付及兑现。同样确保了货币所有权与流通交易的匿名性。";
    vm.symbol_data = item;

    var baseCurrency = item.baseCurrency;
    $('#symbol_detail').find('.content_body').find('.bottom').css('display','block');


}

function load_symbol_list(req){
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
                            var symbol_list = [];
                            for(var i = 0; i < res.data.length; i++){
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
                                    res.data[i].increaseStr = "rate up";
                                }else if(res.data[i].increase < 0){
                                    res.data[i].increaseStr = "rate down";
                                }else{
                                    res.data[i].increaseStr = "";
                                }

                                res.data[i].newPriceStr = (res.data[i].newPrice * 6.8).toFixed(2);
                                res.data[i].highPriceStr = (res.data[i].highPrice * 6.8).toFixed(2);
                                res.data[i].lowPriceStr = (res.data[i].lowPrice * 6.8).toFixed(2);
                                res.data[i].qty = (res.data[i].qty / 8).toFixed(4);
                                res.data[i].qtyStr = (res.data[i].qty / 8 * res.data[i].newPrice * 6.8).toFixed(2);

                                var item = res.data[i];
                                symbol_list.push(item);
                                if(i == 0){
                                    //加载右侧简介
                                    load_right_box(item);
                                }
                            }
                            vm.symbol_list = symbol_list;
                            $('#nav_second').css('display','block');
                            $('#symbol_list').css('display','block');
                            $('#symbolList').css('display','none');
                            initAngularWebsocket();
                        }else if(res.return_code == 0){
                            if($('.nav_first .active').index() == 0){
                                $('#nav_second').css('display','none');
                            }else{
                                $('#nav_second').css('display','block');
                            }
                            vm.symbol_list = [];
                            $('#symbolList').css('display','block');
                        }
                        $('#symbol_detail').find('.content_body').find('.top').css('display','block');

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
        if(tabItem.increase > 0){
            tabItem.increaseStr = "rate up";
        }else if(tabItem.increase < 0){
            tabItem.increaseStr = "rate down";
        }else{
            tabItem.increaseStr = "";
        }

        tabItem.newPriceStr = (tabItem.newPrice * 6.8).toFixed(2);
        tabItem.highPriceStr = (tabItem.highPrice * 6.8).toFixed(2);
        tabItem.lowPriceStr = (tabItem.lowPrice * 6.8).toFixed(2);
        tabItem.qtyStr = (tabItem.qty / 8 * tabItem.newPrice * 6.8).toFixed(2);

        for(var i = 0 ; i < vm.symbol_list.length; i++){
            if(vm.symbol_list[i].symbol == tabItem.symbol){
                Vue.set(vm.symbol_list, i, tabItem)
                if(i == 0 ){
                    load_right_box(tabItem);
                }
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

function sortKey(array,key,sort){
    if(sort == "asc"){
        //正序排序
        return array.sort(function(a,b){
            var x = a[key];
            var y = b[key];
            return ((x<y)?-1:(x>y)?1:0)
        });
    }else if(sort == "desc"){
        //倒序排序
        return array.sort(function(a,b){
            var x = a[key];
            var y = b[key];
            return ((x>y)?-1:(x<y)?1:0)
        });
    }
}

$(function(){
    //切换自选和全部行情
    $('.nav_first a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //切换btc或usdt
    $('#nav_second li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var symbol = $(this).attr('data-val');
        if( vm.symbol == symbol){
            return false;
        }else{
            vm.symbol = symbol;
            load_symbol_list({symbol:symbol});
        }
    });
    //切换排序
    $('#scroll_head dt span .sort').click(function(){
        $(this).closest('span').prev('span').find('.sort').removeAttr('data-sort-type');
        $(this).closest('span').next('span').find('.sort').removeAttr('data-sort-type');
        var sortkey = $(this).attr('data-sort-key');
        var sorttype = $(this).attr('data-sort-type');
        if(sorttype == undefined || sorttype == 'asc'){
            $(this).attr('data-sort-type','desc');
        }else if(sorttype == 'desc'){
            $(this).attr('data-sort-type','asc');
        }
        sorttype = $(this).attr('data-sort-type');
        vm.symbol_list = sortKey(vm.symbol_list,sortkey,sorttype);
        load_right_box(vm.symbol_list[0]);
    });
});