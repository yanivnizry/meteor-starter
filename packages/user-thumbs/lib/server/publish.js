Meteor.publish('attachments', function() {
  return Attachments.find();
});

Meteor.methods({
  deleteAccount: function(userId) {
    if (this.userId === userId) {
      return Meteor.users.remove({
        _id: this.userId
      });
    }
  }
});

Meteor.publishComposite('user', function() {
  return {
    find: function() {
      return Meteor.users.find({
        _id: this.userId
      });
    },
    children: [
      {
      
      }
    ]
  };
});