myApp.controller('MainController', ['$scope', '$state', '$http', function($scope, $state, $http) {
$http.get('../assets/js/options.json').success (function(data){
	$scope.options = data.modules;
});
$scope.$watch('tt', function(value) {
  if(value) {
    $state.go(value);
  }
});
}]);