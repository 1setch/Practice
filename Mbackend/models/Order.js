import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    orderNumber:{
        type: String,
        required: true,

    },
    orderStatus:{
        type: String,
        required: true,
        unique: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    
},{
    timestamps:true,
});

export default mongoose.model('Order',OrderSchema);