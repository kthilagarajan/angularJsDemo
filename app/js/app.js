var app = angular.module('angularModule',["ngRoute"]);

app.controller("JsonResponse",["$scope","$http",function($scope,$http){
	 $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
           // console.log(response.data.content)
			$scope.jsonReply = response.data.content
        });
}])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/About", {
        templateUrl : "views/about.html"
    });
});