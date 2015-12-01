define( [ 'initializer' ], function(contaazulApp) {
	function templateService() {
    'use strict';
		var service = {};

    service.getTemplate = function(){
      return true;
    };

		return service;
	}
	contaazulApp.register.service( 'templateService', [ templateService ] );
} );
