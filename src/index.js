window.flutterWebRenderer = "html";
window.addEventListener('load', function(ev) {
  // Download main.dart.js
  _flutter.loader.loadEntrypoint({
    entrypointUrl: 'main.dart.js',
    serviceWorker: {
      serviceWorkerVersion: serviceWorkerVersion,
    }
  }).then(function(engineInitializer) {
    return engineInitializer.initializeEngine();
  }).then(function(appRunner) {
    return appRunner.runApp();
  });
});