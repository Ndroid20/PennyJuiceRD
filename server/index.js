const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'admin',
    host: 'pennyjuicerd.cghuhuwevmha.us-east-1.rds.amazonaws.com',
    // host: 'localhost',
    password: 'password',
    database: 'pennyjuicerds',
});
db.connect((error) => {
    if(error){
        throw error
    }
    console.log('Database Connected')
})

app.get('/juicedb', (req,res) =>{
    db.query('SELECT * FROM pennyjuicerds.Juice;', (err,response) =>{
        if(err){
            throw error
        } else{
            res.send(response)
        }
    })
} )

app.get('/juicedb')
app.listen(3001, () => {
    console.log("Running on Port 3000")
});
app.post
