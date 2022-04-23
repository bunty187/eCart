import bcrypt from 'bcryptjs';

const data={
    users:[
        {
            name:"Bunty kumar",
            email:"bk123@gmail.com",
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        {
            name:"Kirti Sharma",
            email:"kirti@gmail.com",
            password:bcrypt.hashSync('123456'),
            isAdmin:false,
        },
    ],
    products:[
        { 
            name:'Nike Slim Shirt',
            slug:'nike-slim-shirt',
            category:'Shirts',
            image:'/images/pic10.jpg',
            price:249,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            descrtiption:'high Quality products'
        },
        {
            name:'Nike Pant',
            slug:'nike-pant',
            category:'Pants',
            image:'/images/pic9.webp',
            price:370,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            descrtiption:'high Quality products'
        },
        {
            name:'Adidas Fit Pant',
            slug:'adidas-fit-pant',
            category:'Pants',
            image:'/images/pic12.webp',
            price:280,
            countInStock:10,
            brand:'Adidas',
            rating:4.5,
            numReviews:10,
            descrtiption:'high Quality products'
        },
        {
            name:'Adidas Slim Shirt',
            slug:'adidas-slim-shirt',
            category:'Shirts',
            image:'/images/pic13.webp',
            price:250,
            countInStock:0,
            brand:'Adidas',
            rating:4.5,
            numReviews:10,
            descrtiption:'high Quality products'
        },
    ]
};
export default data;