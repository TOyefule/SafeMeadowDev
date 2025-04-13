<script>

"use strict";

Core.utils.onAllowCookieTracking(() => {
    let dataLayer = window.dataLayer || [];
    if (Array.isArray(dataLayer)) {
        // ... (rest of your code)
    }
});

window.gtag = window.gtag || function() {
    window.dataLayer.push(arguments);
};
gtag("js", new Date());
gtag("set", "developer_id.dZTZmYj", true);
window._commercegaID = "G-BF2FDR6KMM";
gtag("config", "G-BF2FDR6KMM");

(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.onload = () => Core.utils.onAllowCookieTracking(() => f.fbq('consent', 'grant'));
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('consent', 'revoke');
fbq('init', '282429905966327');
fbq('track', 'PageView');    </script>
<style>
        .x {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            margin: 0;
            box-sizing: border-box;
        }
        .x *, .x :after, .x :before {
            box-sizing: inherit;
        }
    </style>
     