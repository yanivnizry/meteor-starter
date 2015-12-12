Package.describe({
  name: 'app-main',
  version: '0.0.1',
  summary: 'Entry point for the app',
  documentation: null,
});
var both = ['client','server'];

Package.onUse(function(api) {
  api.use('app-lib');

  api.use([
    'comments',
    'favorites',
    'notifications',
    'user-thumbs',
  ]);

  api.addFiles([
    'admin.html',
    'loading.html',
    'master_layout.html',
    'home_layout.html',
    'footer.html',
    'navbar.html',
    // 'app-body.js',
    'no_data.html',
    'not_found.html',
    'routes.js',
  ], 'client');
  
  api.addFiles([
     'config.js',
     'adminConfig.js',
     'accounts.js',
     'emails.js',
     'i18n.js',
     'momentum.js',
     'oauth.js',
     'router.js',
     'sAlert.js',
     'seo.js',
     'NCSchemas.js',
     'utils.js',
  ], both );
  
  api.addFiles([
  ], 'server');

  api.addAssets([
    // 'img/logo-todos.svg',
  ], 'client');
});
