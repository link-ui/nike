$(function(){
	$.ajax({
		type:"get",
		url:"goodsAndShoppingCart/getGoodsList.php",
		async:true,
		dataType:"JSON",
		data:{
			
		},
		success:function(data){
			console.log(data)
			createUI(data)
		}
	});
});

function createUI(data){
	var strHtml = "";
	for(let i in data){
		if(data[i].goodsType == "男子运动鞋"){
			strHtml += `<div class="rightMenuBottomShop">
						<div class="rightMenuBottomShopIn">
							<div class="commodity">
								<img src="${data[i].goodsImg}"/>
							</div>
							<div class="commodityMassage">
								<div class="commodityColor">
									${data[i].goodsCount}色
								</div>
								<div class="commodityPrice">
									<p>${data[i].goodsName}</p>
									<p>${data[i].goodsType}</p>
									￥<span>${data[i].goodsPrice}</span>
								</div>
							</div>
						</div>
					</div>`;
		}
	}
	$("#rightMenuBottom").append(strHtml);
}
