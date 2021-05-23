const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
            name: String,
            age:String,
            bloodGroup:String,
            email:String,
            vaccine:String,
            city:String,
            hospital:String,
            pincode:Number,
            phone:Number,
            donatePlasma: Boolean,
            dose1:Boolean,
            dose2:Boolean

}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
