const mariadb = require('mariadb');
const pool = mariadb.createPool({user: 'root', password:'root', database: 'pracemp'})

module.exports = class StatDB{

    constructor(){
        pool.getConnection().then(conn => this.conn=conn)
    }

    async allEmpNumber(){
        let sql=`
        SELECT COUNT(id)
        FROM emp;
        `;
        let result=await this.conn.query(sql);
        return result;
    }
    async mostCommonJob(){
        let sql=`
        SELECT job
        FROM emp
        GROUP BY job
        ORDER BY COUNT(job) DESC
        LIMIT 1;
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    async highestSalary(){
        let sql=`
        SELECT MAX(salary)
        FROM emp;
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    async lowestSalary(){
        let sql=`
        SELECT MIN(salary)
        FROM emp;
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    async avgSalary(){
        let sql=`
        SELECT AVG(salary)
        FROM emp;
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    async department(){
        let sql=`
        SELECT name, location FROM dept;
        `;
        let result=await this.conn.query(sql);
        return result;
    }
    
    async favDept(){
        let sql=`
        SELECT d.name
        FROM emp AS e
        INNER JOIN dept AS d
        ON e.department=d.id
        GROUP BY e.department
        ORDER BY COUNT(e.department) DESC
        LIMIT 1
        `;
        let result=await this.conn.query(sql);
        return result;
    }
}