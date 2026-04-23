
const express=require('express');
const router=express.Router();
const controller=require('../controllers/book.controller')
router.get('/',controller.getBOOKS);

router.get('/:id',controller.getBookById);


router.post('/',controller.PostBook);


router.delete('/:id',controller.DeleteBookById);

module.exports=router;

