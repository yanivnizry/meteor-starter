Template.registerHelper('favoritesByDoc', function(_id) {
  return Favorites.find({
    doc: _id
  });
});

Template.registerHelper('myFavorites', function() {
  return Favorites.find({
    owner: Meteor.userId()
  });
});

// ---
// generated by coffee-script 1.9.2