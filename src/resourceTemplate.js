define( [ 'initializer' ], function(contaazulApp) {
  function templateResource($resource) {
    'use strict';

    return $resource( null, {}, {
			get : {
				method : 'GET',
				url : 'rest/template'
			},
			update : {
				method : 'PUT',
				url : 'rest/template'
			}
		} );
  }
	contaazulApp.register.factory( 'templateResource', [ '$resource', templateResource ] );
} );
