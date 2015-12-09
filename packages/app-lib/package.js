Package.describe({
  summary: 'Common dependencies of all app packages',
  documentation: null,
});

Package.onUse(function(api) {
  // Language stuff
  api.imply([
    'ecmascript',
    'es5-shim',
    'underscore',
    'check',
    'simple:rest@0.2.3'
  ]);

  // Collections
  api.imply([
    'mongo',
    'aldeed:collection2@2.5.0',
    'dburles:collection-helpers@1.0.4',
    'denormalizer',
    'mdg:validation-error'
  ]);

  // Client-side libraries
  api.imply([
    'tracker',
    'jquery',
    'blaze-html-templates',
    'blaze-helpers',
    'reactive-dict',
    'reactive-var',
    'session',
    'aldeed:template-extension@3.4.3',
    'percolate:momentum@0.7.2'
  ]);

  // Routing
  api.imply([
    'kadira:flow-router@2.7.0',
    'kadira:blaze-layout@2.2.0',
    'arillo:flow-router-helpers@0.4.5',
    'zimme:active-route@2.3.0',
  ]);

  // Mobile stuff
  api.imply([
    'mobile-experience',
    'chriswessels:hammer@4.0.2'
  ]);

  // CSS
  api.imply([
    'less',
    'less-imports',
  ]);

  // Testing setup
  api.imply([
    'factory',
  ]);

  // Accounts
  api.imply([
    'accounts-password',
    'useraccounts:unstyled@1.12.4',
    'useraccounts:flow-routing@1.12.4',
    // Required by the above. This version fixes https://github.com/softwarerero/meteor-accounts-t9n/issues/122
    'softwarerero:accounts-t9n@1.1.6'
  ]);

  // Security
  api.imply([
    'ddp-rate-limiter',

    // Production only package with some more security
    'app-prod-security',
  ]);

  // DDP
  api.imply([
    'mdg:validated-method@0.2.0',
    'aldeed:simple-schema@1.4.0',
  ]);
});


/*
standard-minifiers
meteor-base
mobile-experience
blaze-html-templates

logging
reload
random
ejson
spacebars
check
useraccounts:iron-routing
less

accounts-base
accounts-password
aldeed:autoform@5.1.2
alanning:roles
aldeed:collection2
aldeed:simple-schema
fortawesome:fontawesome
raix:handlebar-helpers
cfs:standard-packages
cfs:gridfs
aldeed:template-extension
cfs:graphicsmagick
yogiben:helpers
iron:router
yogiben:autoform-modals
yogiben:pretty-email
yogiben:autoform-file
yogiben:autoform-map
#multiply:iron-router-progress
manuelschoebel:ms-seo
spiderable
accounts-facebook
accounts-google
accounts-twitter
twbs:bootstrap
accounts-ui
jparker:gravatar
tap:i18n
useraccounts:bootstrap
service-configuration
yogiben:mixpanel
juliancwirko:s-alert
juliancwirko:s-alert-stackslide
momentjs:moment
zimme:iron-router-active
user-thumbs
comments
favorites
dburles:collection-helpers
reywood:publish-composite
percolate:momentum-iron-router
percolate:momentum
natestrauser:animate-css
meteorhacks:subs-manager
fastclick
notifications
yogiben:admin
timmyg:wow
tsega:skrollr
utilities:avatar
*/