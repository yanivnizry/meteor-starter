Meteor.methods({
  readAllNotifications: function() {
    return Notifications.update({
      read: false
    }, {
      $set: {
        read: true
      }
    }, {
      multi: true
    });
  }
});

// ---
// generated by coffee-script 1.9.2