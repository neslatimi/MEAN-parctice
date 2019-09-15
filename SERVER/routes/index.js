var express = require('express');
var router = express.Router();
const StatisticDB=require('./../modules/statistic');
const db = new StatisticDB;

/* GET home page. */
router.get('/', async (req, res, next) =>{
  let numberOfAllEmp= await db.allEmpNumber();
  let mostCommonJob=await db.mostCommonJob()
  let highestSal= await db.highestSalary();
  let lowestSal= await db.lowestSalary();
  let avgSal=await db.avgSalary();
  let departments= await db.department();
  let favouriteDept= await db.favDept();
  
  res.render('index', { title: 'employees database',
              numberOfAllEmployee: numberOfAllEmp[0],
              mostCommonJob:mostCommonJob[0],
              highestSalary: highestSal[0],
              lowestSalary :lowestSal[0],
              avgSalary:avgSal[0],
              department : departments,
              favouriteDepartment : favouriteDept[0]
             });
});

module.exports = router;
