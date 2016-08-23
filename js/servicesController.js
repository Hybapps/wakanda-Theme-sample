MyApp.controller('servicesController', function($scope, $wakanda) {
	$wakanda.init().then(function(ds){
		ds.Services.$all().$promise.then(function(data){
			$scope.Services = data.result;
		});
	});
});