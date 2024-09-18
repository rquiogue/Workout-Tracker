import mongoose from 'mongoose'
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: 'No description yet'
    },
    exercises: {
        type: Array,
        default: []
    },

    /*
        We will be adding these later when the application is more mature 
    */

    // commentSection: {
    //     type: ObjectId,
    //     required: true
    // },
    // likes: {
    //     type: ObjectId,
    //     required: true
    // }
});