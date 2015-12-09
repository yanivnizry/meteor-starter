Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });
  return this.route("dashboard", {
    path: "/dashboard",
    waitOn: function() {
      return [subs.subscribe('posts'), subs.subscribe('comments'), subs.subscribe('attachments')];
    },
    data: function() {
      return {
        posts: Posts.find({}, {
          sort: {
            createdAt: -1
          }
        }).fetch()
      };
    }
  });
});

Router.map(function() {
  this.route("profile", {
    path: "/profile"
  });
  this.route("account", {
    path: "/account"
  });
  this.route("setUserName", {
    path: "/setUserName",
    onBeforeAction: function() {
      if (!Config.username || (Meteor.userId() && Meteor.user().username)) {
        this.redirect('/dashboard');
      }
      return this.next();
    }
  });
  return this.route('signOut', {
    path: '/sign-out',
    onBeforeAction: function() {
      Meteor.logout(function() {});
      this.redirect('/');
      return this.next();
    }
  });
});
