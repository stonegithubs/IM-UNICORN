<?php
namespace app\team\controller;
use think\View;

class Index
{
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

}