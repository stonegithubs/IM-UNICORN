<?php
namespace app\tool\controller;
use think\View;

class Index
{
    public function index()
    {
        $view = new View();
        return $view->fetch();
    }

    public function tojson(){
        $view = new View();
        return $view->fetch();
    }

    public function encrypt(){
        $view = new View();
        return $view->fetch();
    }


}