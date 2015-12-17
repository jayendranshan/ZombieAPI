
angular.module('ZombieAPI', ['ui.bootstrap', 'xeditable', 'ngRoute', 'ngResource'])
.run(function(){
}])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/list.html',
    controller: 'ListController',
    controllerAs: 'lc'
  })
  .when('/person/:id', {
    templateUrl: 'templates/detail.html',
    controller: 'DetailController',
    controllerAs: 'dc'
  })
  .when('/new', {
    templateUrl: 'templates/detail.html',
    controller: 'DetailController',
    controllerAs: 'dc'
  });
}]);