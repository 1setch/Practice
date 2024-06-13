import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({
    text:{
        type: String,

    },
    orderRate:{
        type: Number,
        required: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    avatarUrl: String,
    
},{
    timestamps:true,
});

export default mongoose.model('Review',ReviewSchema);