
var MyApp=angular.module('starter', ['ionic', 'wakanda']);
//var url="http://127.0.0.1:8081/rest/";
MyApp.run(function($ionicPlatform ,$rootScope,$location,$timeout,$ionicHistory,$http) {
//      $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

        $rootScope.service=[{id:"1",img:"img/s1.png",title:"Battery and engine restore"},{id:"2",img:"img/s2.png",title:"Car liquids replacement"},{id:"3",img:"img/s3.png",title:"Speed and engine testing"},{id:"4",img:"img/s4.png",title:"Electric car loading"}]	
    $rootScope.blog=[{id:"1",img:"img/b1.png"},{id:"2",img:"img/b2.png"}]
    $rootScope.items=[{id:"1",img:"img/m1.png",title:"John Doe Adel"},{id:"2",img:"img/m3.png",title:"Jonathan Doe"},{id:"3",img:"img/m4.png",title:"Adam Jonathan"},{id:"4",img:"img/m2.png",title:"Adam Jonathan"},{id:"5",img:"img/m1.png",title:"Adam Jonathan"},{id:"6",img:"img/m2.png",title:"Adam Jonathan"}]
    $rootScope.convertdate = function(date){  return   moment(date).format('MMMM  DD, YYYY') }   

    $rootScope.activeItemMenu=function(index){
           $rootScope.activeMenu=index;
        }

       $rootScope.myGoBack = function() {$ionicHistory.goBack(); };

    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        $timeout(function(){
             if(navigator.splashscreen)  navigator.splashscreen.hide();   
        },3000);
    });
})

MyApp.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider, $httpProvider) {
    $ionicConfigProvider.backButton.text('').previousTitleText('')  ;
    $ionicConfigProvider.views.transition("none");
    $httpProvider.defaults.withCredentials = true;

    $stateProvider
    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  
  .state('app.team', {
    url: "/team",
    views: {
      'menuContent': {
        templateUrl: "templates/team.html"
      }
    }
  })
  
   .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "templates/contact.html"
      }
    }
  })
  
  
  .state('app.detail', {
    url: "/detail",
    views: {
      'menuContent': {
        templateUrl: "templates/detail.html"
      }
    }
  })
  
   .state('app.blog', {
    url: "/blog",
    views: {
      'menuContent': {
        templateUrl: "templates/blog.html"
          ,controller: 'blogsController'
      }
    }
  })
  .state('login', {
    url: "/login",
        templateUrl: "templates/login.html"
  })
  
   .state('register', {
    url: "/register",
        templateUrl: "templates/register.html"
  })

  .state('app.services', {
    url: "/services",
    views: {
      'menuContent': {
        templateUrl: "templates/services.html"
        ,controller: 'servicesController'
      }
    }
  })
    .state('app.dashboard', {
      url: "/dashboard",
      views: {
        'menuContent': {
          templateUrl: "templates/dashboard.html"
        }
      }
    })
	.state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
