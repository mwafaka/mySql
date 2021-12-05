const { application } = require('express');
const express = require('express');
const mysql= require('mysql');

const app = express()

    let connection = mysql.createConnection({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'smapleDB'
    });
    connection.connect((err)=>{
        if(err){

            throw err
        }else{
            console.log('Connected')
        }
    })

    app.get('/',(req,res)=>{
        connection.query('SELECT * FROM sampletable' ,(err,rows,fields)=>{
            if(err){
                console.log(err)
            }else{
                console.log('Successful\n')
                console.log(rows[2].Name)
                res.send(rows)
            }
        })
    })

    app.listen(3000,()=>{
        console.log('server Run on 3000')
    })