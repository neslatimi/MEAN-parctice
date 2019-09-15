const mariadb = require('mariadb');
const pool = mariadb.createPool({user: 'root', password:'root', database: 'pracemp'})

module.exports = class DB{

    constructor(){
        pool.getConnection().then(conn => this.conn=conn)
    }

    //get all employees
    async read(){
        let sql=`
            SELECT e.id, e.name, e.job, e.salary, d.name AS departmentName, e.department AS department
            FROM emp AS e 
            INNER JOIN dept AS d 
            ON e.department=d.id;        
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    //get one employee by id
    async getOne(id){
        let sql=`
            SELECT e.id, e.name, e.job, e.salary, d.name AS department 
            FROM emp AS e 
            INNER JOIN dept AS d 
            ON e.department=d.id
            WHERE e.id=${id};        
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    //get type of departments
    async department(){
        let sql=`
        SELECT DISTINCT d.name AS departmentName, e.department AS departmentNumber
        FROM emp AS e 
        INNER JOIN dept AS d 
        ON e.department=d.id      
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    //get all data from two table
    async allInfo(id){
        let sql=`
        SELECT e.id, e.name, e.job, e.salary, d.name AS department, d.location 
        FROM emp AS e 
        INNER JOIN dept AS d
        ON e.department=d.id
        WHERE e.id=${id}
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    //Update, editing data
    async update(data,id){
        let sql=`
       UPDATE emp 
       SET name='${data.name}', job='${data.job}',
            salary=${data.salary}, department=${data.department} 
        WHERE id=${id};        
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    //create new employee
    async create(data){
        let sql=`
        INSERT INTO emp 
            (id, name , job, salary, department)
        VALUES
            (NULL,'${data.name}','${data.job}', ${data.salary}, ${data.department})
        `;
        let result=await this.conn.query(sql);
        return result;
    }

    //delete employee by id
    async delete(id){
        let sql=`
            DELETE FROM emp WHERE id=${id};
        `;
        let result=await this.conn.query(sql);
        return result;
    }
}