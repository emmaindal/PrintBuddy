
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


export const Items = new Mongo.Collection('items');

const ItemsSchema = new SimpleSchema({
    title: { type: String },
    desc: { type: String }
});


Items.attachSchema(ItemsSchema);

Items.helpers({
    test(){
        return this.desc + " from helpers";
    }
});
