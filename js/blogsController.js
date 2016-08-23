MyApp.controller('blogsController', function($scope, $wakanda,$http,$rootScope,$stateParams,$location) {
	$wakanda.init().then(function(ds){
        ds.Blogs.$all().$promise.then(function(data){
			$scope.Blogs = data.result;
		});
	});
//    $rootScope.Blogs=[];
//    $scope.Refresh=function()
//    {
//        $rootScope.StopLoadMore=false;
//        $rootScope.Blogs = [];
//        $scope.Load_Posts()
//    }
//var headers = {
//				'Access-Control-Allow-Origin' : '*',
//				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
//				'Content-Type': 'application/json',
//				'Accept': 'application/json'
//			};
//    $scope.Load_Posts = function () 
//    {   if(!$scope.Load){
//            $scope.Load=true;
////             if($scope.Blogs.length==0) $rootScope.show_loading($rootScope.lang_config.Loading ); 
//            console.log(url+"Blogs?$limit=1&$skip="+$scope.Blogs.length)
//             $http({method: 'GET', url:url+"Blogs?$limit=1&$skip="+$scope.Blogs.length,timeout:60000 }).success(function (res) {
//                 console.log(res)
//                $scope.Blogs=res;
//                if(res.length==0)$scope.StopLoadMore=true;
//            }).finally(function () {
//                $scope.Load=false;
////                $rootScope.hide_loading();
//                $scope.$broadcast('scroll.refreshComplete');
//                $scope.$broadcast('scroll.infiniteScrollComplete');
//            });
//        }
//    };
});