import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    
    passwordHash:{
        type: String,
        required: true,
    },
    // orders: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Order",
    // },
    cart:{
        type: Array,
        default:[],
    },
    favorites:{
        type: Array,
        default:[],
    },
    avatarUrl: String,
    address: String,
    
},{
    timestamps:true,
});

export default mongoose.model('User',UserSchema);