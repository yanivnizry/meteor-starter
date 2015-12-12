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
    // 'simple:rest',
    'tap:i18n',
  ]);

  // Collections
  api.imply([
    'mongo',
    'aldeed:collection2@2.5.0',
    'dburles:collection-helpers@1.0.4',
    // 'denormalizer',
    'mdg:validation-error',
    'reywood:publish-composite',
  ]);

  // Client-side libraries
  api.imply([
    'tracker',
    //'jquery',
    'blaze-html-templates',
    // 'blaze-helpers',
    'reactive-dict',
    'reactive-var',
    'session',
    'aldeed:template-extension@3.4.3',
    'percolate:momentum@0.7.2',
    'percolate:momentum-iron-router',
    'tsega:skrollr',
    'utilities:avatar',
    'jparker:gravatar',
    'juliancwirko:s-alert',
    'juliancwirko:s-alert-stackslide',
    'templating',
  ]);

  // Routing
  api.imply([
    // 'kadira:flow-router@2.7.0',
    // 'kadira:blaze-layout@2.2.0',
    // 'arillo:flow-router-helpers@0.4.5',
    // 'zimme:active-route@2.3.0',
    'iron:router',
    'zimme:iron-router-active',
  ]);

  // Mobile stuff
  api.imply([
    'mobile-experience',
    'chriswessels:hammer'
  ]);

  // CSS
  api.imply([
    'less',
    // 'less-imports',
    'natestrauser:animate-css',
    'timmyg:wow',
  ]);

  // Testing setup
  api.imply([
    // 'factory',
  ]);

  // Accounts
  api.imply([
    'accounts-password',
    //'useraccounts:unstyled',
    //'useraccounts:flow-routing@1.12.4',
    // Required by the above. This version fixes https://github.com/softwarerero/meteor-accounts-t9n/issues/122
    // 'softwarerero:accounts-t9n@1.1.6',
    'accounts-facebook',
    'accounts-google',
    'accounts-twitter',
    'accounts-base',
    'accounts-password',
    'accounts-ui',
    'useraccounts:bootstrap',
    'useraccounts:iron-routing',
    'meteorhacks:subs-manager',
  ]);

  // Security
  api.imply([
    'ddp-rate-limiter',

    // Production only package with some more security
    // 'app-prod-security',
  ]);

  // DDP
  api.imply([
    'mdg:validated-method',
    'aldeed:simple-schema',
  ]);
  
  //Forms
  api.imply([
    'aldeed:autoform',
    // 'alanning:roles',
    'aldeed:collection2',
    'fortawesome:fontawesome',
    'raix:handlebar-helpers',
    'yogiben:autoform-modals',
    'yogiben:pretty-email',
    'yogiben:autoform-file',
    'yogiben:autoform-map',
  ]);
  
//seo
  api.imply([
    //'manuelschoebel:ms-seo',
    'spiderable',
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
#useraccounts:iron-routing
less

#accounts
#accounts-facebook
#accounts-google
#accounts-twitter
#accounts-base
#accounts-password
#accounts-ui
#useraccounts:bootstrap

#forms
aldeed:autoform@5.1.2
alanning:roles
aldeed:collection2
aldeed:simple-schema
fortawesome:fontawesome
raix:handlebar-helpers

aldeed:template-extension

yogiben:helpers
iron:router

#forms
yogiben:autoform-modals
yogiben:pretty-email
yogiben:autoform-file
yogiben:autoform-map

#misc
#multiply:iron-router-progress



#twbs:bootstrap

#language

service-configuration
yogiben:mixpanel
juliancwirko:s-alert
juliancwirko:s-alert-stackslide
momentjs:moment
user-thumbs
comments
favorites

#collections
dburles:collection-helpers
reywood:publish-composite

#animation
#percolate:momentum-iron-router
#percolate:momentum
#natestrauser:animate-css
#timmyg:wow
#tsega:skrollr
#utilities:avatar
#jparker:gravatar

#mobile
fastclick


notifications
yogiben:admin


#users

*/