app.directive("passwordCheck",[function(){
	return {
		require : 'ngModel',
		link : function(scope, elemnt, attr, ctrl){
			ctrl.$parsers.push(function(){
				var noMatch = scope.formData.password.$viewValue === scope.formData.repassword.$viewValue;
				scope.formData.password.$setValidity('noMatch',noMatch);
				scope.formData.repassword.$setValidity('noMatch',noMatch);
				return noMatch ? noMatch : !noMatch;
			});
		}
	};
}]);