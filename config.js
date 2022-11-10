const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"sqluser1",
    password:"password",
    database:"tiktokdemo"
});

//connect to database
connection.connect(function(error){
    if (error) throw error
    else console.log("Connection to database successs!!");
})

module.exports =connection