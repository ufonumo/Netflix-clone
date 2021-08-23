const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
    title: {type:String, required:true, unqiue:true},
    desc: {type:String, },
    image: {type:String,},
    imageTitle: {type:String, },
    imageSmall: {type:String,},
    trailer: {type:String,},
    video: {type:String,},
    year: {type:Number,},
    genre: {type:String,},
    isSeries:{type:Boolean, default: false}
},
    {timestamps:true}
);

module.exports = mongoose.model('Movie', MovieSchema)