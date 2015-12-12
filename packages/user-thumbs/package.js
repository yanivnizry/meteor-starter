Package.describe({
	name: 'user-thumbs',
	summary: "Display user thumbnails.",
	version: "0.0.8",
	git: "http://github.com/yogiben/meteor-user-helpers.git"
});

	 both = ['client','server'];

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.2');

	api.use(
		[
		  'app-lib',

		],
		both);

	 api.addFiles(
		[
			'lib/client/templates.html',
			'lib/client/templates.js',
			'lib/client/helpers.js',
			'lib/client/templates.less',
      		'lib/client/utils.js'
		],
		'client');
		
	 api.addFiles(
		[
      		'lib/both/attachments.js',
      		'lib/both/users.js',
      		// 'lib/both/profile.js',
      		// 'lib/both/profile.html',
		],
		both );
		
		api.export(['Attachments','ProfilePictures']);
});
