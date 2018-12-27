<?php
namespace app\website\controller;
use think\View;

class Index
{
    public function index()
    {
        $view = new View();
        return $view->fetch();
    }

}