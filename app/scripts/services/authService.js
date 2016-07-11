//servicio que verifica sesiones de usuario
(function(){

    'use strict';
    
    angular.module('app')
    .factory('auth',auth);

    function auth($http, api, $state, webStorage,$rootScope,mensajes){
        return{
            login : function(credenciales)
            {   

                $http.post(api+'login',credenciales)
                .success(function (data){

                    // console.log(data);
                    $rootScope.cargando = false;

                    webStorage.session.add('id',data.id);
                    webStorage.session.add('user',data.username);
                    webStorage.session.add('name',data.name);
                    webStorage.session.add('email',data.email);
                    webStorage.session.add('skill',data.skill);
                    webStorage.session.add('SSID',data.remember_token);

                    if (credenciales.guardar) {
                        webStorage.local.add('usuario',JSON.stringify(data));
                    }

                    $state.go('index.home');

                }).error(function (data){

                    if (data) {
                        mensajes.alerta(data.flash,'error center-dialog','top','error');
                    }else{
                        mensajes.alerta('Error en conexión intentalo nuevamente','error center-dialog','top','error');
                    }
                    $rootScope.cargando = false;
                });

            },
            logout : function()
            {	
            	webStorage.session.clear();
                $http.get(api+'logout');
            	$state.go('login');
            },
            verify : function(api)
            {
                
            }
        }
    }

})();