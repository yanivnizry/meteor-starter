Package.describe({
  name: "posts",
  summary: "Manage posts",
  version: "0.1.0",
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use(
  	[
  	  'app-lib',

  	],
  	both);

  api.addFiles(
  	[
  		'lib/both/collections.js'
  	],
  	both);

   api.addFiles(
  	[
  		'lib/client/templates.html',
      'lib/client/templates.js',
      'lib/client/helpers.js',
  		'lib/client/autoform.js'
  	],
  	'client');

   api.addFiles(
  	[
  		'lib/server/allow.js',
  		'lib/server/publish.js'
  	],
  	'server');
   api.export('Comments',both);

   api.imply('aldeed:simple-schema');
   api.imply('aldeed:collection2');



});
