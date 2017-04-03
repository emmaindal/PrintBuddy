
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const Items = new Mongo.Collection('items');

const ItemsSchema = new SimpleSchema({
    title: { type: String },
    desc: { type: String }
});


Items.attachSchema(ItemsSchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Items.helpers({
    test(){
        return this.desc + " from helpers";
    }
});
