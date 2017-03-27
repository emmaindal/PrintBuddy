
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import  {Items} from '../items.js';


/* använd om man vill sätta ihop relaterade dokument
 https://github.com/englue/meteor-publish-composite

 Meteor.publishComposite('items', function items() {
 check(arguments, [Match.Any]);

 return {
 find() {
 return Items.find();
 }
 };
 }); */


Meteor.publish('items', function items() {
    return Items.find();
});
