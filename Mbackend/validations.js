import { body } from "express-validator";


export const registerValidation=[
    body('email','Неверный формат почты').isEmail(),
    body('password','Пароль меньше 5 символов').isLength({min:5}),
    body('fullName','укажите имя').isLength({min:3}),
    body('avatarUrl','Неверная ссылка').optional().isURL(),
    body('address','Неправильно указан адрес').optional().isString(),
];

export const loginValidation=[
    body('email','Неверный формат почты').isEmail(),
    body('password','Пароль меньше 5 символов').isLength({min:5}),
    
];
export const reviewCreateValidation=[
    body('text','напишите отзыв').optional().isLength({min:10}).isString(),
    body('orderRate','postav ocenku').isNumeric(),
];
export const prodCreateValidation=[
    body('title','Неверное название').isLength({min:5}).isString(),
    body('text','Неправильное описание').isLength({min:5}),
    body('category','Неверная категория').isLength({min:3}),
    body('prodPrice','введите цену').isNumeric(),
    body('altImages','Неверные ссылки').optional().isArray(),
    body('avatarUrl','Неверная ссылка').optional().isURL(),
    
];
export const prodSearchValidation=[
    body('text','Неверное название').isLength({min:3}).isString(),
];