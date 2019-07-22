if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        // Registration was successful
        console.log(
          'Cortez-ServiceWorker registration successful with scope: ',
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log('Cortez-ServiceWorker registration failed: ', err);
      }
    );
  });
}
