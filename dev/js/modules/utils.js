'use strict';

(function (global, $, app) {
    app.utils = (function () {

        var isMobile = function () {
            var isMobile = {
                Android: function () {
                    return (navigator.userAgent.match(/Android/i));
                },
                BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return (navigator.userAgent.match(/iPhone|iPad|iPod/i));
                },
                Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function () {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };
            return isMobile.any();
        };

        return {
            isMobile: isMobile
        }
    })();

})(window, jQuery, window.PESSOA_APP || (window.PESSOA_APP = {}));
