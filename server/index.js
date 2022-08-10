const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'pennyjuice',
});
db.connect((error) => {
    if(error){
        throw error
    }
    console.log('Database Connected')
})

app.get('/juicedb', (req,res) =>{
    db.query('SELECT * FROM pennyjuice', (err,response) =>{
        if(err){
            throw error
        } else{
            res.send(response)
        }
    })
} )

app.get('/juicedb')
app.listen(3001, () => {
    console.log("Running on Port 3001")
});

// app.get('/juicedb1', (req,res) =>{
//     db.query('SELECT * FROM pennyjuice ORDER BY price ASC', (err,response) =>{
//         if(err){
//             throw error
//         } else{
//             res.send(response)
//         }
//     })
// } )

// app.get('/juicedb2', (req,res) =>{
//     db.query('SELECT * FROM pennyjuice ORDER BY price DESC', (err,response) =>{
//         if(err){
//             throw error
//         } else{
//             res.send(response)
//         }
//     })
// } )
