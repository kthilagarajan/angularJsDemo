//Element Attribute - EA
//app.directive('logo',function(){
//	return {
//		restrict : "EA",
//		template : "<img src='../../images/gLogo.png'>"
//	}
//});
app.directive('logo',function(){
	return {
		restrict : "EA",
		template : function(element, attribute){
			if(attribute.wsize){
				return "<img src='images/shop.png' width='"+attribute.wsize+"' height='"+attribute.hsize+"' >";
			}else{
				return "<img src='images/gLogo.png'>";
			}
		}
	}
});
