const resource = [
    /* --- CSS --- */
    '/chirpytestandmore/assets/css/style.css',

    /* --- PWA --- */
    '/chirpytestandmore/app.js',
    '/chirpytestandmore/sw.js',

    /* --- HTML --- */
    '/chirpytestandmore/index.html',
    '/chirpytestandmore/404.html',

    
        '/chirpytestandmore/categories/',
    
        '/chirpytestandmore/tags/',
    
        '/chirpytestandmore/archives/',
    
        '/chirpytestandmore/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/chirpytestandmore/assets/img/favicons/android-chrome-192x192.png',
        '/chirpytestandmore/assets/img/favicons/android-chrome-512x512.png',
        '/chirpytestandmore/assets/img/favicons/apple-touch-icon.png',
        '/chirpytestandmore/assets/img/favicons/favicon-16x16.png',
        '/chirpytestandmore/assets/img/favicons/favicon-32x32.png',
        '/chirpytestandmore/assets/img/favicons/favicon.ico',
        '/chirpytestandmore/assets/img/favicons/mstile-150x150.png',
        '/chirpytestandmore/assets/js/dist/categories.min.js',
        '/chirpytestandmore/assets/js/dist/commons.min.js',
        '/chirpytestandmore/assets/js/dist/home.min.js',
        '/chirpytestandmore/assets/js/dist/misc.min.js',
        '/chirpytestandmore/assets/js/dist/page.min.js',
        '/chirpytestandmore/assets/js/dist/post.min.js',
        '/chirpytestandmore/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'seaque.github.io',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

