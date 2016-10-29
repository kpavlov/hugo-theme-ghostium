(function ($, window, document) {
    'use strict';


    function hasCookie(a) {
        return document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)') ? true : false;
    }

    const COOKIE_NAME = 'cookie';

    if (!hasCookie(COOKIE_NAME)) {
        //no cookie
        const cookiePopup = $("#cookiePolicyPopup");
        cookiePopup.show();
        $("#cookiePolicyAccept").click(function (e) {
            e.preventDefault();
            const now = new Date();
            now.setFullYear(now.getFullYear() + 10);
            document.cookie = COOKIE_NAME + "=ok;expires=" + now.toGMTString() +";path=/";
            cookiePopup.fadeOut();
        });
    }
})(jQuery, window, document);

