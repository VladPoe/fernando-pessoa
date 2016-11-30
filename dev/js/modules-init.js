'use strict';

(function(global, $, app){
    //dependencies
    var utils = app.utils;
    var menu = app.menu;

    $(document).ready(function(){
        if (!utils.isMobile()){

        }
        else {
            $('html').addClass('mobile');
        }

        menu.init();


    });
}(window, jQuery, window.PESSOA_APP || (window.PESSOA_APP = {})));
