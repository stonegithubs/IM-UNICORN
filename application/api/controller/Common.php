<?php
namespace app\api\controller;

use think\Controller;
use think\Db;
use think\Request;

class Common extends Controller
{
    public $http;
    public $domain;

    public function __construct()
    {
        $this -> http = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
        $this -> domain = $_SERVER['HTTP_HOST'];
    }

    protected  function inputParam(){
        if (isset($GLOBALS['HTTP_RAW_POST_DATA'])) {
            $final = $GLOBALS['HTTP_RAW_POST_DATA'];
        } else {
            $final = file_get_contents('php://input');
        }
        $param = json_decode($final,true);
        return $param;
    }

    protected function ajaxReturn($code = 0,$message = '',$data = []){
        $result = [
            'return_code' => $code,
            'return_message' =>$message,
            'data' => $data,
        ];
        echo json_encode($result);
        die;
    }

    protected function verifyToken($param=[]){
        if(isset($param['token'])){
            unset($param['token']);
        }
        $str = '';
        ksort($param);
        foreach($param as $k => $v){
            $str .= $k.'='.$v.'&';
        }
        $str .= 'key=123456';
        $encode = mb_detect_encoding($str, array("ASCII",'UTF-8',"GB2312","GBK",'BIG5'));
        $str_encode = mb_convert_encoding($str, 'UTF-8', $encode);
        return MD5($str_encode);
    }

    public function getToken(){
        $param = $this -> inputParam();
        $token = $this -> verifyToken($param);
        $this -> ajaxReturn(200,'获取成功',$token);
    }




}