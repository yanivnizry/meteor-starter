Package.describe({
  name: "comments",
  summary: "Adds comments to your collection(s) of choice",
  version: "0.1.0",
  git: "http://github.com/yogiben/meteor-comments.git"
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
   api.export('Comments');

   api.imply('aldeed:simple-schema');
   api.imply('aldeed:collection2');



});
