Meteor.publish("allUsers", function(){
    return Meteor.users.find(); 
}