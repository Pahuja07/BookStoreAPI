const express=require('express');
const router=express.Router();
const authorsTable=require("../models/author.model");
const BooksTable=require("../models/book.model");
const db=require("../db");
const {eq}=require("drizzle-orm");

router.get("/",async(req,res)=>{


    const auhtora=await db.select().from(authorsTable);
    return res.json(auhtora);

})
router.get("/:id",async(req,res)=>{
    const id=req.params.id;
    const [author]=await db.select().from(authorsTable).where(authorsTable.id.id)

if(!author){
    return res.status(400).json({error:`Author with ID ${req.params.id} does not exist`});
}
return res.json(author);


})
router.post("/",async(req,res)=>{
    const {firstname,lastname,email}=req.body;
    const [result]=await db.insert(authorsTable).values({
        firstname,lastname,email,
    }).returning({id:authorsTable.id});

return res.json({message:`author has been created`,id:result.id});


}
);
router.get("/:id/books",async(req,res)=>{
    const books=await db.select().from(BooksTable).where(eq(BooksTable.authorId,req.params.id));
    return res.json(books);
})

module.exports=router;



