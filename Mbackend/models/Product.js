import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    text:{
        type: String,
        required: true,
        unique: true,
    },
    
    category:{
        type: String,
        required: true,
    },
    сharacteristics:{
        type: Array,
        default:[],
    },
    prodPrice:{
        type: Number,
        default:0,
    },
    reviews:{
        type: Array,
    },
    altImages:{
        type: Array,
        default:[],
    },
    imageUrl: String,
},{
    timestamps:true,
});

export default mongoose.model('Product',ProductSchema);