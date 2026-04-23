require('dotenv/config');
const express=require('express');
const app=express();
const {loggermiddleware}=require('./middlewares/logger.js')
const bookRouter=require('./routes/books.routes.js');
const authorRoute=require('./routes/author.routes.js')
 app.use(express.json());



//here we are making a middleware

//here i have created a custom middleware which i am using to protect the routes and which i will always use


app.use(loggermiddleware);

app.use('/books',bookRouter);
app.use('/authors',authorRoute);















app.listen(8000,()=>{
    console.log("my server is running on port 8000");
});



