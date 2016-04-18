myApp.directive('promoSDirective', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      scope:{},
      template: `<div class="module promo-s  module-first   {{extraClasses}}   "> 
	   <div class="desktop-fragments-promoS-group-1 promo1 bkg-img"> 
	    <a href="javascript:void(0);"> 
	     <div class="module-body"> 
	      <div class="info"> 
	       <h3>{{title}}</h3> 
	       <p> {{copy}} </p> 
	       <p class="product-cta">{{cta}}</p> 
	      </div> 
	     </div> <span class="hover-down"></span>
	     </a> 
		</div> 
		</div>`,
		link: function ( $scope, element, attrs ) {
			$scope.title="test";
			$scope.copy="This is copy text";
			$scope.cta="Cta link";
			$scope.extraClasses="dark diagonal";
			element.bind('click', function(e) {
	        
	       		console.log(angular.element('h3').text())
	       		e.preventDefault();
	        });
		}
  	};
}); 