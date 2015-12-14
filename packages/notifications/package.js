Package.describe({
  summary: "Adds notification functionality",
  version: "0.0.7",
  git: "http://github.com/yogiben/meteor-notifications.git"
});

both = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  
  api.use(
      [
      'app-lib',
      ],
      both);

  api.addFiles(
      [
        'lib/both/collections.js',
        'lib/both/router.js'
      ],
      both);

  api.addFiles(
      [
        'lib/client/templates.html',
        'lib/client/templates.js',
        'lib/client/helpers.js',
        'lib/client/tracker.js',
        'lib/client/style.less'
      ],
      'client');

  api.addFiles(
      [
        'lib/server/allow.js',
        'lib/server/publish.js',
        'lib/server/methods.js'
      ],
      'server');
      
      api.export('Notifications');
});
