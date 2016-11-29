'use strict';

(function(global, $, app){
    //dependencies
    var utils = app.utils;
    var menu = app.menu;

    $(document).ready(function(){
        menu.init();
        if (!utils.isMobile()){

        }
        else {
            $('html').addClass('mobile');
        }

    });
}(window, jQuery, window.PESSOA_APP || (window.PESSOA_APP = {})));
