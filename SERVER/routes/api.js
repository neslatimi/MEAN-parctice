var express = require('express');
var router = express.Router();
const apiDB=require('./../modules/apidb');
const db = new apiDB;

router.get('/', async (req,res, next)=>{
    let employees = await db.getAll();
    //console.log(employees)
    res.send(employees);
});

router.delete('/delete/:id', async (req,res,next)=>{
    let result = await db.delete(req.params.id);
    res.send(result);
})

router.get('/new', async (req,res, next)=>{
    let result = await db.department();
    console.log(result)
    res.send(result);
})

router.post('/new', async (req,res, next)=>{
    let result= await db.create(req.body);
    res.send(result);
})

router.get('/edit/:id', async (req,res, next)=>{
    //let department= await db.department();
    let result = await db.getOneForEdit(req.params.id);
    res.send(result)
})

router.post('/edit/:id', async (req, res, next)=>{
    let result = await db.update(req.body,req.params.id);
    console.log(result);
    res.send(result);
})

router.get('/details/:id', async (req,res, next)=>{
    let result = await db.getOne(req.params.id);
    console.log(result);
    res.send(result);
})
module.exports = router;