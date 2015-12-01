define( ['initializer'], function(contaazulApp) {
	function templateDirective() {
    'use strict';

		function templateLink(scope, element, attr) {
		}

		return {
			restrict : 'AE',
			link : templateLink,
			scope : {
			},
			templateUrl : 'path/template.html'
		};
	}
	contaazulApp.register.directive( 'template', [ templateDirective ] );
} );
