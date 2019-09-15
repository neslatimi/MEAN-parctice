var express = require('express');
var router = express.Router();
const emplDB=require('./../modules/db');
const db = new emplDB;

/* GET home page. */
router.get('/', async (req, res, next) => {
  let employees = await db.read();
  res.render('employees', { title: 'Employess',
              emp : employees});
});

//display the new page
router.get('/new', async (req, res, next) => {
  let employeesDep = await db.department();
  res.render('new', {empDep:employeesDep});
});

//send the new employee
router.post('/new', async (req, res, next) => {
  let result  = await db.create(req.body);
  res.redirect('/employees')
});

//display the edit page with data
router.get('/edit/:id', async (req, res, next) => {
  let employeesDep = await db.department();
  let employee = await db.getOne(req.params.id);
  res.render('edit', {emp : employee[0], empDep:employeesDep});
});

//send updated data from the edit page and navigate back to the table
router.post('/edit/:id', async (req, res, next) => {
  let employee = await db.update(req.body,req.params.id);
  res.redirect('/employees');
 
});

//delete the selected employee
router.get('/cancel/:id', async (req, res, next) => {
  let employee = await db.delete(req.params.id);
  res.redirect('/employees')
});

//show one employee by clicked
router.get('/show/:id', async (req,res, next)=>{
  let result= await db.allInfo(req.params.id)
  res.render('show', {data:result[0]});
})


module.exports = router;
