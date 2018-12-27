<?php
namespace app\team\controller;
use think\Controller;
use think\View;
use think\Db;

class Index extends Controller
{
    protected function ajax_Return($status = 200,$msg = 'success',$info = array()){
        is_array($info) ? array_walk($info,'totalNullToQuotation') : true;
        $array = array(
            'status' => $status,
            'msg'    => $msg,
            'info'   => $info
        );
        exit(json_encode($array, 0));
    }

    public function index()
    {
        if(empty(session('theme'))){
            session('theme','theme1');
        }
        if(!empty($_GET['theme'])){
            session('theme',$_GET['theme']);
        }
        $theme = session('theme');
        $view = new View();
        return $view->fetch($theme);
    }

    public function login()
    {
        $view = new View();
        return $view->fetch();
    }

    public function register()
    {
        $view = new View();
        return $view->fetch();
    }

    public function recover_password(){
        $view = new View();
        return $view->fetch();
    }

    public function check_login(){
        empty($_POST['username']) ? $this -> ajax_Return(0,'用户名不能为空') : true;
        empty($_POST['password']) ? $this -> ajax_Return(0,'密码不能为空') : true;
        $user = Db::name('member') -> where('phone|email|nickname',$_POST['username']) -> find();
        empty($user) ? $this -> ajax_Return(0,'会员不存在') : true;
        password_verify($_POST['password'],$user['password']) !== true ? $this -> ajax_Return(0,'密码错误') : true;
        session('team_user_info',$user);
        $this -> ajax_Return();
    }

}