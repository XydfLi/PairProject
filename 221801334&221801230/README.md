# PaperCV

## 作业链接

作业博客链接：[https://www.cnblogs.com/w-wwh/p/14594059.html](https://www.cnblogs.com/w-wwh/p/14594059.html)

## 结对学号

* 221801334
* 221801230

## 项目介绍

> 基于结对作业一的原型设计开发的Web程序。

### 技术简介

* 前端：bootstrap4
* 后端：springboot+mybaties+SQLite

### 功能简介

* 登录注册
* 主页（轮播图展示三大会议信息、三大会议最新资讯）
* 论文列表（模糊查询、排序、删除）
* 数据统计（使用echarts图表、图谱、点击关键词跳转等）
* 总论文统计（显示总论文的数据统计情况）

## 运行环境

> 注：因为使用了bootstrap4，可能对一些浏览器不兼容

* 浏览器：Chrome（推荐）、Firefox、Internet Explorer（版本10+）
* 后端：JDK1.8（推荐）、CentOS 7.9 x64（推荐）

## 使用说明

### 方法一

> 打开Chrome浏览器，输入地址：http://120.24.27.29:8080/login.html
> 默认登录账号：666，登录密码：123456。也可以通过注册用户后登录

### 方法二（移植到自己服务器运行）

* 在服务器上下载源码（Source code）并解压
* 修改221801334&221801230/PaperCV/src/main/resources/static/js/base.js文件中的httpRoot变量为自己服务器的IP
* 打包为jar包并执行
* 执行方法一
    