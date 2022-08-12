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
    password: 'password',
    database: 'pennyjuicerds',
});
// axios.get('localhost:3000/juicedb',{crossdomain: true})
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
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.listen(3001, () => {
    console.log("Running on Port 3000")
});
app.post
