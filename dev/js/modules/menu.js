'use strict';

(function(global, $, app){

    app.menu = (function() {

        var init = function() {

            var $sidebar = $('.js-sidebar');
            var sidebarActiveClass = 'active';
            var sidebarHintClass = 'hint';
            var $showBtn = $('.js-sidebar-show-btn');
            var closeBtnClass = 'js-close-sidebar';

            $showBtn.mouseover(function() {
                hintMenu();
            });
            $showBtn.mouseout(function() {
                unhintMenu();
            });

            $showBtn.on('click', function() {
                var $this = $(this);
                if ($this.hasClass(closeBtnClass)) {
                    closeMenu();
                }
                else {
                    openMenu();
                }
            });

            $('body').on('click', function() {
                closeMenu();
            });

            $sidebar.on('click', function(event) {
                event.stopPropagation();
            });

            function hintMenu() {
                if (!$sidebar.hasClass(sidebarActiveClass) && !$sidebar.hasClass(sidebarHintClass)) {
                    $sidebar.addClass(sidebarHintClass);
                }
            }
            function unhintMenu() {
                if ($sidebar.hasClass(sidebarHintClass)) {
                    $sidebar.removeClass(sidebarHintClass);
                }
            }

            function openMenu() {
                if (!$sidebar.hasClass(sidebarActiveClass)) {
                    $sidebar.removeClass(sidebarHintClass);
                    $sidebar.addClass(sidebarActiveClass);
                    $showBtn.addClass(closeBtnClass);
                }
            }
            function closeMenu() {
                if ($sidebar.hasClass(sidebarActiveClass)) {
                    $sidebar.removeClass(sidebarActiveClass);
                    $showBtn.removeClass(closeBtnClass);
                }
            }

        };

        return {
            init: init
        }

    })();

})(window, jQuery, window.PESSOA_APP || (window.PESSOA_APP = {}));
