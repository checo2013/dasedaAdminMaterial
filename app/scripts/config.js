(function(){

	'use strict';

	angular
	.module('app')
	.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$mdThemingProvider','$httpProvider','$compileProvider', '$mdDateLocaleProvider'];

	function config($stateProvider, $urlRouterProvider, $locationProvider,$mdThemingProvider,$httpProvider,$compileProvider, $mdDateLocaleProvider) {

		$compileProvider.debugInfoEnabled(true);

		$mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		$mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul', 'Ago','Sep','Oct','Nov','Dic'];
		$mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'];
		$mdDateLocaleProvider.shortDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi' ,'Sa'];

	  	$mdDateLocaleProvider.formatDate = function(date) {
		    return date ? moment(date).format('DD/MM/YYYY') : '';
		};
		  
		$mdDateLocaleProvider.parseDate = function(dateString) {
		    var m = moment(dateString, 'DD/MM/YYYY', true);
		    return m.isValid() ? m.toDate() : new Date(NaN);
		};      

		$urlRouterProvider.otherwise('/home');

		$stateProvider

		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'loginCtrl',
			controllerAs: 'sesion'
		})

		.state('index', {
			url: '/',
			abstract:true,
			templateUrl: 'views/base.html'
		})

		.state('index.home',{
			url:'home',
			templateUrl :'views/home.html',
			controller:'homeCtrl'
		})

		.state('index.registro',{
			url:'registro',
			templateUrl :'views/registro.html',
			controller:'registroCtrl',
			controllerAs:'rg',
			resolve: {
				datos : function(busqueda){
					return busqueda.clientes();
				}
			}
		});


		$locationProvider.html5Mode(true);

	    $mdThemingProvider.theme('theme1')
		.primaryPalette('indigo')
	    .accentPalette('red');

	    $mdThemingProvider.theme('theme2')
		.primaryPalette('deep-orange')
		.warnPalette('indigo')
	    .accentPalette('red');

	    $mdThemingProvider.theme('theme3')
		.primaryPalette('neonBlue')
	    .accentPalette('red');

	    $mdThemingProvider.theme('theme4')
		.primaryPalette('blue-grey')
	    .accentPalette('red');

	    $mdThemingProvider.theme('theme5')
		.primaryPalette('neonGreen')
	    .accentPalette('red');

	    $mdThemingProvider.theme('theme6')
		.primaryPalette('deep-purple')
	    .accentPalette('red');

	    $mdThemingProvider.theme('docs-dark')
		.primaryPalette('red')
		.dark();

		var neonBlueMap = $mdThemingProvider.extendPalette('blue', {
			'500': '#3175E7',
			'contrastDefaultColor': 'light'
		});

		var neonGreenMap = $mdThemingProvider.extendPalette('green', {
			'500': '#259B24',
			'contrastDefaultColor': 'light'
		});

		
		// Register the new color palette map with the name <code>neonRed</code>
		$mdThemingProvider.definePalette('neonBlue', neonBlueMap);
		$mdThemingProvider.definePalette('neonGreen', neonGreenMap);
		
	    $mdThemingProvider.setDefaultTheme('theme1');
	    $mdThemingProvider.alwaysWatchTheme(true);

	    $httpProvider.defaults.timeout = 1000;
	  	
	}

})();
