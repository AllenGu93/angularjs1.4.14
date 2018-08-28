var app = angular.module('myApp', []);
app.controller('GreetCtrl', function ($scope, $rootScope) {
	$scope.name = 'World';
	$rootScope.department = 'Angular';
});
app.controller('ListCtrl', ['$scope', function($scope){
	$scope.names = ['allen', 'pang'];
}])