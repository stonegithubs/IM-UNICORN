<?php
namespace app\web\controller;
use think\View;

class User
{
    public function center()
    {
        $view = new View();
        return $view->fetch();
    }
}
