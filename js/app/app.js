(function($){
  
  var contacts = [
    { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
    { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
    { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
    { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
    { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
    { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
    { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
    { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
  ];
  
  var Contact = Backbone.Model.extend({
    defaults: {
      photo: "img/placeholder.png"
    }
  });
  
  var Directory = Backbone.Collection.extend({
    model: Contact
  });
  
  var ContactView = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: Handlebars.compile(
      $("#contact-template").html()
    ),
    
    render: function() {
      var json = this.model.toJSON();
      var html = this.template(json);
      this.$el.html(html);
      return this;
    }
    
  });
  
  var DirectoryView = Backbone.View.extend({
    el: $("#contacts"),
    
    initialize: function() {
      this.collection = new Directory(contacts);
      this.render();
    },
    
    render: function() {
      var that = this;
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },
    
    renderContact: function(contact) {
      var contactView = new ContactView({
        model: contact
      });
      
      this.$el.append(contactView.render().el);
    }
    
  });
  
  var directory = new DirectoryView();
    
}(jQuery));