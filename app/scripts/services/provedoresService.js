(function(){

    'use strict';
    
    angular.module('app')
    .factory('provedores',provedores);

    function provedores($resource ,webStorage, api){

    	return $resource( api + 'provedores/:id', null,
	    {
	        'update': { method:'PUT', headers: {'Token':webStorage.session.get('SSID')} },
			'get'	: { method:'GET', headers: {'Token':webStorage.session.get('SSID')} },
		  	'save'	: { method:'POST', headers: {'Token':webStorage.session.get('SSID')} },
		  	'query'	: { method:'GET', isArray:true, headers: {'Token':webStorage.session.get('SSID')} },
		  	'remove': { method:'DELETE', headers: {'Token':webStorage.session.get('SSID')} },
		  	'delete': { method:'DELETE', headers: {'Token':webStorage.session.get('SSID')} } 
	  	});
    }

})();
