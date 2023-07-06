const mysql2=require('mysql2');
let connect=mysql2.createPool({
    host:"localhost",
    user:"root",
    database:"mysqlClass",
    password:""
})

module.exports=connect.promise();