<?php

namespace app\push\controller;

use think\worker\Server;

class Worker extends Server
{
    protected $socket = 'websocket://www.test.com:2346';

    /**
     * 收到信息
     * @param $connection
     * @param $data
     */
    public function onMessage($connection, $data)
    {
        dump($data);
        $msg = explode(',',$data);
        $arr['code'] = $msg[0];
        //$arr = json_decode("{code:102,text:hello}",true);
        dump($arr);
        if($arr['code'] == '101'){
            //管理员和管理员之间通信
        }elseif($arr['code'] == '102'){
            //客服和客户之间通信
            $hour = date('H');
            if($hour < 9 || $hour >= 13){
                $connection->send('早9点至晚10点是客服在线服务时间，请您先留言，待客服上线之后处理哦！');
            }else{

            }
        }elseif($arr['code'] == '103'){
            //客户和客户之间通信
        }elseif($arr['code'] == '104'){
            //合伙人和其下级（除了交易商）通信
        }

    }

    /**
     * 当连接建立时触发的回调函数
     * @param $connection
     */
    public function onConnect($connection)
    {


    }

    /**
     * 当连接断开时触发的回调函数
     * @param $connection
     */
    public function onClose($connection)
    {

    }

    /**
     * 当客户端的连接上发生错误时触发
     * @param $connection
     * @param $code
     * @param $msg
     */
    public function onError($connection, $code, $msg)
    {
        echo "error $code $msg\n";
    }

    /**
     * 每个进程启动
     * @param $worker
     */
    public function onWorkerStart($worker)
    {

    }
}
