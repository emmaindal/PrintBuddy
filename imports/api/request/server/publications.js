import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import  {Request} from '../request.js';



Meteor.publish('request', function items() {
    // Todo fixa här så användaren endast ser de requesten de kan ta.

    return Request.find();
});


