<?php
namespace app\team\controller;
use think\View;

class User
{
    public function add_user()
    {
        $view = new View();
        $view->assign('dir_header',session('theme')."/header");
        $view->assign('dir_footer',session('theme')."/footer");
        return $view->fetch();
    }

    public function user_list(){
        $view = new View();
        $view->assign('dir_header',session('theme')."/header");
        $view->assign('dir_footer',session('theme')."/footer");
        return $view->fetch();
    }
}