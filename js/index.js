window.onload = function(){
	//搜索栏获焦事件
	$("#searchInput").focus(function(){
		$("#searchInput").animate({
			width:"220px"
		},500);
	});
	$("#searchInput").blur(function(){
		$("#searchInput").animate({
			width:"200px"
		},500);
	});
	
	//点击登录
	$("#accountNumber").click(function(){
		$("#bgColor").css("display","block");
		$("#login").css("display","block");
		
		//文本框失焦
		$("#userPaw").blur(function(){
			if(this.value == ""){
				$("#userPaw").css("border-color","#FF0000");
				//console.log($("#tipSpan").innerHTML)
				$("#tipSpan").css("display","block");
			}
		});
		
		//退出按钮
		$("#quit").click(function(){
			$("#login").css("display","none");
			$("#bgColor").css("display","none");
		});
		
		//注册页面
		$("#enroll").click(function(){
			$("#login").css("display","none");
			$("#register").css("display","block")
		});
		
		//点击切换
		$("#vipRegisterLogin").click(function(){
			$("#login").css("display","block");
			$("#register").css("display","none");
		});
		
		//点击退出
		$("#registerQuit").click(function(){
			$("#register").css("display","none");
			$("#bgColor").css("display","none");
		});
		
		//验证数据库中是否存在
		$("#registerUserNum").blur(function(){
			if($("#registerUserNum").val()==""){
				alert("输入不能为空！");
				return;
			}else{
				//定义对象
				let xhr = new XMLHttpRequest();
				//设置请求参数
				xhr.open("GET","check.php?username="+this.value,true);
				//设置回调函数
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						if(xhr.responseText == 1){
//							console.log(xhr.responseText);
							alert("该用户名已存在");
						}else{
							alert("该用户名可用");
						}
					}
				}
				//发送
				xhr.send();
				//console.log(xhr.responseText);
			}
			
		});
		
		//点击注册
		$("#btnRegister").click(function(){
			//判断是否为空
			let userNum = /^[1][3,4,5,7,8][0-9]{9}$/;
			let userPaw = /^\w{4,16}$/;
			if($("#registerUserNum").val() == ""&& $("#registerUserPaw").val() == ""){
				alert("输入内容不能为空!");
			}else if(!userNum.test($("#registerUserNum").val()) || !userPaw.test($("#registerUserPaw").val())){
				alert("输入数据不合法");
				return;
			}else{
				$.post("test.php",{"username" : $("#registerUserNum").val() , "password" : $("#registerUserPaw").val()},function(str){
					
				});
			}
		});
		
		//登录判断
		$("#btnLogin").click(function(){
			//发送请求
			let xhr = new XMLHttpRequest();
			xhr.open("POST","login.php",true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					if(xhr.responseText == 1){
						//登录成功保存cookie
//						saveCookie("username,password","$passwore".value,7);
						//清空输入框
						$("#userNum").value = "";
						$("#userPaw").value = "";
						$("#login").css("display","none");
						$("#bgColor").css("display","none");
						//创建用户列表
						$("#accountNumber").html("我的账户");
						$("#accountNumber").mouseover(function(){
							if($("#accountNumber").innerHTML="我的账户"){
								$("#accountNumber").mouseover(function(){
									$("#listMenu").css("display","block");
								});
							}
						});
					}else{
						alert("您输入的用户不存在");
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			let xhrStr = "username=" + $("#userNum").val() + "&password=" + $("#userPaw").val();
			xhr.send(xhrStr);
			
			//输入为空判断
			if($("#userNum").val() == "" && $("#userPaw").val() == ""){
				$("#userPaw").css("border-color","#FF0000");
				$("#tipSpan").css("display","block");
				$("#loginSpan").css("display","block");
				$("#loginDiv").css("border-color","#FF0000");
			}
		});
	});
	
	//点击跳转
	$("#headerBottomUlBoyMenuNewgoods").click(function(){
		location.href("newMenu.html");
	});
}
