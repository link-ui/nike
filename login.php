<?php
	date_default_timezone_set("Asia/Shanghai");
	//接收数据
	$username = $_POST['username'];
	$password = $_POST['password'];
	//连接数据库
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//选择数据库
		mysql_select_db("nike",$conn);
		//执行sql语句
		$sqlstr = "select * from user where username='$username' and password='$password';";
		$result = mysql_query($sqlstr);
//		echo $sqlstr;
		mysql_query($sqlstr,$conn);
		//关闭数据库
		mysql_close($conn);
		//响应
		if(mysql_num_rows($result)>0){
			echo "1";
		}else{
			echo "0";
		}
	}
?>