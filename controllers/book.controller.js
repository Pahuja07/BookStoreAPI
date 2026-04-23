const booksTable=require('../models/book.model.js');
const db=require("../db");
const {eq,ilike}=require("drizzle-orm");
const authorsTable = require('../models/author.model.js');
const BooksTable = require('../models/book.model.js');


exports.getBOOKS= async function(req,res){
    const search=req.query.search;
   if(search){
    const books=await db.select().from(booksTable).where(ilike(booksTable.title,`%${search}%`));
   return res.json(books);
}
    const books=await db.select().from(booksTable);
    return res.json(books);
};

exports.getBookById=async function(req,res){
    const id=(req.params.id);

    const [book]=await db.query().where((booksTable)=> eq(booksTable.id,id)).leftJoin(BooksTable.authorId,authorsTable.id)
    .limit(1);
    if(!book) res.status(404).json({error:'book with id does not exist'});

    res.json(book);
};

exports.PostBook=async function(req,res){
    const {title,authorId,description}=req.body;
    if(!title || title.trim()==="") return res.status(400).json({error:"title is required"});

    
    const [result]= await db.insert(booksTable).values({
    title,
    authorId,
    description,

   })
   .returning({
    id:booksTable.id,
   });
   
    res.status(201).json({message:`book created success `,id: result.id});  
};

exports.DeleteBookById=async function(req,res){
    const id=req.params.id;
   await db.delete(booksTable).where(eq(booksTable.id,id))
    return res.status(200).json({message:'book has been deleted'});
};