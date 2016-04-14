var myApp=angular.module('MyApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('promoM', {
            url: 'promoM',
            templateUrl: 'modules/promo-m/index.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('promoS', {
             url: 'promoS',
            templateUrl: 'modules/promo-s/index.html'     
        });
        
});
