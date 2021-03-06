Config = {
  name: 'My App',
  title: function() {
    return TAPi18n.__('configTitle');
  },
  subtitle: function() {
    return TAPi18n.__('configSubtitle');
  },
  logo: function() {
    return '<b>' + this.name + '</b>';
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'noreply@' + Meteor.absoluteUrl()
  },
  blog: 'http://benjaminpeterjones.com',
  about: 'http://benjaminpeterjones.com',
  username: false,
  homeRoute: '/dashboard',
  socialMedia: [['http://facebook.com/benjaminpeterjones', 'facebook'], ['http://twitter.com/BenPeterJones', 'twitter'], ['http://github.com/yogiben', 'github']]
};

Avatar.options = {
  customImageProperty: 'profile.picture'
};

Meteor.startup(function() {
  if (Meteor.isClient) {
    return TAPi18n.setLanguage('en');
  }
});