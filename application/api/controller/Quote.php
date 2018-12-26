<?php
namespace app\api\controller;

use think\Db;

class Quote extends Common
{
    public function listMarket(){
        $param = $this -> inputParam();
        empty($param['symbol']) ? $this -> ajaxReturn(0,'币种参数为空') : true;
        empty($param['token'])  ? $this -> ajaxReturn(0,'令牌参数为空') : true;
        $token = $this -> verifyToken($param);
        $param['token'] != $token ? $this -> ajaxReturn(0,'令牌验证失败') : true;
        $quoteCurrencys = array_filter(explode(',',$param['symbol']));
        $symbol = Db::name('bb_buysellminmax') -> where('quoteCurrency','in',$quoteCurrencys) -> column('symbol');
        empty($symbol) ? $this -> ajaxReturn(0,'未查询到数据') : true;
        $data = Db::connect('db_config2') -> name('allprice') -> field("qtecode symbol,highPrice,lowPrice,openPrice,closeprice newPrice,qty,calcAmount,increase,updateTime") -> where('qtecode','in',$symbol) -> select();
        empty($data) ? $this -> ajaxReturn(0,'获取数据失败') : $this -> ajaxReturn(200,'success',$data);
    }
}