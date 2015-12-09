Package.describe({
  name: 'app-main',
  version: '0.0.1',
  summary: 'Entry point for the app',
  documentation: null,
});

Package.onUse(function(api) {
  api.use('app-lib');

  api.use([
    'comments',
    'favorites',
    'notifications',
    'user-thumbs',
  ]);

  api.addFiles([
    'head.html',
    'loading.html',
    'loading.less',
    'app-not-found.html',
    'app-not-found.less',
    'app-body.html',
    'app-body.js',
    'root-redirector.html',
    'root-redirector.js',
    'routes.js'
  ], 'client');

  api.addFiles([
  ], 'server');

  api.addAssets([
    'img/logo-todos.svg',
  ], 'client');
});
