(function ($, window, document) {
    'use strict';


    function hasCookie(a) {
        return document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)') ? true : false;
    }

    const COOKIE_NAME = 'cookie-accepted';

    if (!hasCookie(COOKIE_NAME)) {
        //no cookie
        const cookiePopup = $("#cookiePolicyPopup");
        cookiePopup.show();
        $("#cookiePolicyAccept").click(function (e) {
            e.preventDefault();
            document.cookie = COOKIE_NAME + "=1;path=/";
            cookiePopup.fadeOut();
        });
    }
})(jQuery, window, document);

