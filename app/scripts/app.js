(function(){

	'use strict';


	angular.module('app', [
		'ui.router',
		'ngMaterial',
		'ngMdIcons',
		'webStorageModule',
		'ngMessages',
		'ngResource',
		'ngAnimate',
		'md.data.table',
		'ngFileUpload',
		'angular.filter',
		'ngResource'
	])
	
	.constant('api', 'http://localhost/dasedaNuevo/public/api/')
	// .constant('api', 'http://api.medicavial.mx/api/')

	.constant('publicfiles','http://localhost/mvred/server/public/exports/');
	// .constant('publicfiles','http://api.medicavial.mx/exports/')
	

})();





