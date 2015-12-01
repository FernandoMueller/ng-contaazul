define( [ 'initilizer' ], function(contaazulApp) {
	function templateController($scope) {
    'use strict';

    $scope.templateController = 'Template Controller';
	}

	contaazulApp.register.controller( 'templateController', [ '$scope', templateController ] );
} );
