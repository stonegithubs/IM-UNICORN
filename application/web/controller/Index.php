<?php
namespace app\web\controller;
use think\View;

class Index
{
    public function index()
    {
        $view = new View();
        return $view->fetch();
    }

    public function markets()
    {
        $view = new View();
        return $view->fetch();
    }

    public function buy()
    {
        $view = new View();
        return $view->fetch();
    }

    public function exchange()
    {
        $view = new View();
        return $view->fetch();
    }

    public function tv_chart()
    {
        $view = new View();
        return $view->fetch();
    }

    public function margin()
    {
        $view = new View();
        return $view->fetch();
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

    public function uc_reset_pwd()
    {
        $view = new View();
        return $view->fetch();
    }
}
