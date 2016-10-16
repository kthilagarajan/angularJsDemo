//Array Contains dependency and callback function
app.controller('IndexController',['$scope','MyFactory',function($scope,MyFactory){
	
	//$scope.message = "Hello Angular";
	$scope.message = MyFactory.sayWhatever("User");
	
	
	$scope.postData = function(){
		//alert($scope.username)
	}
	$scope.details = [
			{
				"product":"A",
				"price":20
			},
			{
				"product":"B",
				"price":200
			},
			{
				"product":"C",
				"price":50
			}
		];
	
	$scope.cart = [];
	$scope.addToCart = function(index){
		$scope.cart.push($scope.details[index])
		$scope.details[index].disable = true;
	}
	
	$scope.removeItem = function(index){
		$scope.cart[index].disable = false;
		$scope.cart.splice(index,1)
	}
	
	$scope.getTotal = function(){
		var total = 0
		angular.forEach($scope.cart,function(val){
			total = total + val.price;
		})
		return total;
	}
	
	$scope.places = [
		{
			"locationCode":1,
			"location":"United States"
		},{
			"locationCode":2,
			"location":"China"
		},{
			"locationCode":3,
			"location":"Japan"
		},]
}]); 