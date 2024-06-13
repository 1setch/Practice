import ProductModel from '../models/Product.js'
import ReviewModel from '../models/Review.js'
import UserModel from '../models/User.js'


// export const getLastTags =async (req,res)=>{
//     try{
//         const posts = await PostModel.find().limit(5).exec();
//         const tags = posts.map(obj=>obj.tags).flat().slice(0,5);

//         res.json(tags);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({
//             message: 'neudalos poluchit stti',
//         });
//     }
// }

export const getAll= async (req,res)=>{
    try{
        
        const prods = await ProductModel.find().exec();

        res.json(prods);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить список товаров',
        });
    }
}
export const find= async (req,res)=>{
    try{
        const finds=req.body.text;
        const prods = await ProductModel.find({title:  { "$regex": finds, "$options": "i" }}).exec();

        res.json(prods);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить список товаров',
        });
    }
}


export const getCategory= async (req,res)=>{
    try{
        const prodsId=req.params.id;
        const prods = await ProductModel.find({ category: prodsId}).exec();

        res.json(prods);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить список товаров',
        });
    }
}

export const getAllReviews= async (req,res)=>{
    try{
        const prodsId=req.params.id;
         
        const review = await ReviewModel.find({ product: prodsId}).exec();

        res.json(review);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить список otzvov',
        });
    }
}

export const getOne= async (req,res)=>{
    try{
        const prodId=req.params.id;
        const review = await ReviewModel.find({ product: prodId}).exec();
        //const review2 = 
        //findbyid 
        //console.log("reviews",review);
        await ProductModel.findOneAndUpdate(
            { _id: prodId }, {reviews: review})
            .then(doc => {res.json(doc)})
            .catch(err => res.status(500).json({ message: "Статья не найдена" }))
        ;
       // const test = await ProductModel.find({ _id: prodId }).exec();
        //console.log(test);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'neudalos poluchit sttttti',
        });
    }
}


export const addToCart= async (req,res)=>{
    try{
        const prodId=req.params.id;
        const userName = await UserModel.findById(req.userId).exec();
        var arr=[];
        arr= userName.cart;
        arr.push(prodId);
        arr = [...new Set(arr)];
        await UserModel.findOneAndUpdate(
            { _id: req.userId }, {cart: arr})
            .then(doc => {res.json(doc)})
            .catch(err => res.status(500).json({ message: "Статья не найдена" }))
        ;
       
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'neudalos poluchit sttttti',
        });
    }
}

export const addToFavorites= async (req,res)=>{
    try{
        const prodId=req.params.id;
        const userName = await UserModel.findById(req.userId).exec();
        var arr=[];
        arr= userName.favorites;
        arr.push(prodId);
        arr = [...new Set(arr)];
        console.log(arr);
        await UserModel.findOneAndUpdate(
            { _id: req.userId }, {favorites: arr})
            .then(doc => {res.json(doc)})
            .catch(err => res.status(500).json({ message: "Не удалось добавить в избранное" }))
        ;
       
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'neudalos poluchit sttttti',
        });
    }
}

export const removeFromCart= async (req,res)=>{
    try{
        const prodId=req.params.id;
        const userName = await UserModel.findById(req.userId).exec();
        var arr=[];
        arr= userName.cart;
        let index = arr.indexOf(prodId);
        if (index !== -1) {
            arr.splice(index, 1);
        }
        

        //arr = [...new Set(arr)];
        await UserModel.findOneAndUpdate(
            { _id: req.userId }, {cart: arr})
            .then(doc => {res.json(doc)})
            .catch(err => res.status(500).json({ message: "беды с корзиной" }))
        ;
       
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'беды с корзиной',
        });
    }
}
export const removeFromFavorites= async (req,res)=>{
    try{
        const prodId=req.params.id;
        const userName = await UserModel.findById(req.userId).exec();
        var arr=[];
        arr= userName.favorites;
        let index = arr.indexOf(prodId);
        if (index !== -1) {
            arr.splice(index, 1);
        }
        

        //arr = [...new Set(arr)];
        await UserModel.findOneAndUpdate(
            { _id: req.userId }, {favorites: arr})
            .then(doc => {res.json(doc)})
            .catch(err => res.status(500).json({ message: "беды с корзиной" }))
        ;
       
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'беды с корзиной',
        });
    }
}



export const createReview = async (req,res)=> {
    try{
        const prodId=req.params.id;
        //const userName =  UserModel.find({_id: req.userId}).exec();
        const userName = await UserModel.findById(req.userId).populate('fullName', 'avatarUrl').exec();


        const doc = new ReviewModel({ 
            text: req.body.text,
            orderRate: req.body.orderRate,
            userName:  userName.fullName,
            avatarUrl: userName.avatarUrl,
            product: prodId,

        });
       // console.log( userName.fullName);
        const review = await doc.save();

        res.json(review);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'neudalos',
        });

    }
};

export const create = async (req,res)=> {
    try{
        const doc = new ProductModel({ 
            title: req.body.title,
            text: req.body.text,
            category:req.body.category,
            сharacteristics: req.body.сharacteristics,
            prodPrice: req.body.prodPrice,
            reviews: req.body.reviews,
            altImages:req.body.altImages,
            imageUrl: req.body.imageUrl,

            //user: req.userId,

        });

        const prod = await doc.save();

        res.json(prod);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'neudalos',
        });

    }
};



// export const remove= async (req,res)=>{
//     try{
//         const postId=req.params.id;

//         PostModel.findOneAndDelete({
//             _id: postId,
//         })
//         .then(doc => res.json({succes:true}))
//         .catch(err => res.status(500).json({ message: "Статья не найдена" }))


        
        
      
        
//     }catch(err){
//         console.log(err);
//         res.status(500).json({
//             message: 'neudalos poluchit sttttti',
//         });
//     }
// }


// export const create = async (req,res)=> {
//     try{
//         const doc = new PostModel({ 
//             title: req.body.title,
//             text: req.body.text,
//             imageUrl: req.body.imageUrl,
//             tags: req.body.tags,
//             user: req.userId,

//         });

//         const post = await doc.save();

//         res.json(post);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({
//             message: 'neudalos',
//         });

//     }
// };

// export const update = async (req,res)=>{
//     try{
//         const postId=req.params.id;

//         PostModel.updateOne({
//             _id: postId,
//         },{
//             title: req.body.title,
//             text: req.body.text,
//             imageUrl: req.body.imageUrl,
//             tags: req.body.tags,
//             user: req.userId,
//         }).then(doc => res.json({succes:true}))


        
//         //res.json({succes:true,message: "huy"})
      
        
//     }catch(err){
//         console.log(err);
//         res.status(500).json({
//             message: 'neudalos obnovit sttttti',
//         });
//     }
// }