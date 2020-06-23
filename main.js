if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
            console.log('Service worker registered. scope: ', reg.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
};