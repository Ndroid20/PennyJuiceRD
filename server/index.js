import express, { json } from "express";
const app = express();
import { createConnection } from "mysql";
import cors from "cors";
import bodyparser from "body-parser";

app.use(json());
app.use(cors());

const db = createConnection({
  user: "admin",
  host: "pennyjuicerd.cghuhuwevmha.us-east-1.rds.amazonaws.com",
  password: "password",
  database: "pennyjuicerds",
});
// axios.get('localhost:3000/juicedb',{crossdomain: true})
db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Database Connected");
});

app.get("/juicedb", (req, res) => {
  db.query("SELECT * FROM pennyjuicerds.Juice;", (err, response) => {
    if (err) {
      throw error;
    } else {
      res.send(response);
    }
  });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3001, () => {
  console.log("Running on Port 3000");
});

app.post("/create", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;


    db.query('INSERT INTO contactinfo (first_name, last_name, email, message) VALUES (?,?,?,?)', [firstName, lastName, email, message], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send('Values Inserted')
        }

  db.query(
    "INSERT INTO `pennyjuicerds.contactinfo` (first_name, last_name, email, message) VALUES (?,?,?,?)",
    [firstName, lastName, email, message],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }

    }
  );
});
