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
    // 'comments',
    // 'favorites',
    // 'notifications',
    // 'user-thumbs',
  ]);

  api.addFiles([
    'lib/client/admin.html',
    'lib/client/loading.html',
    'lib/client/master_layout.html',
    'lib/client/home_layout.html',
    'lib/client/footer.html',
    'lib/client/navbar.html',
    'lib/client/no_data.html',
    'lib/client/not_found.html',
    'lib/client/routes.js',
    'lib/client/home.html',
    'lib/client/home.import.less',
    'lib/client/home.js',
    'lib/client/account.html',
    'lib/client/account.js',
    'lib/client/i18n.js',
    // 'lib/client/router.js',
  ], 'client');
  
  api.addFiles([
     'lib/both/config.js',
     'lib/both/adminConfig.js',
     'lib/both/accounts.js',
     'lib/both/emails.js',
     'lib/both/momentum.js',
     'lib/both/oauth.js',
     'lib/both/sAlert.js',
     'lib/both/NCSchemas.js',
     'lib/both/utils.js',
  ], both );
  
  api.addFiles([
  ], 'server');

  api.addAssets([
    // 'img/logo-todos.svg',
  ], 'client');
  api.export('Schemas');
});
