window.onload=function(){


    var elemento = document.querySelector('#splash');

    angular.element(elemento).addClass('zoomIn splash-open');
    window.setTimeout(function(){

        angular.element(elemento).removeClass('zoomIn splash-open');
        angular.element(elemento).addClass('fadeOut');
        angular.bootstrap(document,['app']);

    },2000);

}