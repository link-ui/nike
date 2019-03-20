<?php
	header("Content-type:text/html;charset=utf-8");
	//获取用户输入的内容
	$username = $_GET['username'];
	
	//连接数据库
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败");
	}
	
	//选择数据库
	mysql_select_db("nike",$conn);
	
	//执行sql语句
	$sqlstr = "select * from user where username = '$username'";
	$result = mysql_query($sqlstr);
	
	//关闭数据库
	mysql_close($conn);	
	
	//响应
	if(mysql_num_rows($result)>0){
		echo "1";
	}else{
		echo "0";
	}
?>