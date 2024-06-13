import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import multer from "multer";


import * as ProdController from './controllers/ProdController.js'
import * as UserController from './controllers/UserController.js'
import HandleValidationErrors from "./utils/HandleValidationErrors.js";
import { loginValidation, prodCreateValidation, prodSearchValidation, registerValidation, reviewCreateValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";


mongoose.connect('mongodb+srv://admin:123@cluster0.bao2qe3.mongodb.net/music?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('db Ok'))
.catch((err)=>console.log('db ne ok',err));

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb)=>{
        cb(null,'uploads');
    },
    filename:(_,file, cb)=>{
        cb(null,file.originalname);
    }
});

const upload = multer({storage});


app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use(cors());



app.post('/auth/register', registerValidation,HandleValidationErrors, UserController.register);
app.post('/auth/login',loginValidation, HandleValidationErrors, UserController.login);
app.get('/auth/me', checkAuth, UserController.getMe );




app.get('/prods',  ProdController.getAll );
app.get('/category/:id',  ProdController.getCategory );
app.post('/prods',checkAuth, prodCreateValidation,HandleValidationErrors, ProdController.create );
app.post('/search', prodSearchValidation,HandleValidationErrors, ProdController.find );
app.patch('/addtocart/:id',checkAuth, ProdController.addToCart );
app.patch('/addtofavorites/:id',checkAuth, ProdController.addToFavorites );

app.get('/removefromcart/:id',checkAuth, ProdController.removeFromCart );
app.get('/removefromfavorites/:id',checkAuth, ProdController.removeFromFavorites );

app.get('/prods/:id',  ProdController.getOne );
//app.post('/posts',checkAuth, postCreateValidation,HandleValidationErrors, PostController.create );
app.post('/prods/:id',checkAuth, reviewCreateValidation,HandleValidationErrors, ProdController.createReview );



app.listen(4000, (err)=>{
    if(err){
        return console.log(err);
    }

    console.log("server OK");
});