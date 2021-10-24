const express=require("express");
const cors=require("cors");
const bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
var corsOptons={
  origin:"http://localhost:8081"
};
app.set('view engine', 'ejs');
const ejs=require("ejs");
app.use(bodyParser.json())

app.use(cors(corsOptons));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const db = require("./app/models");
db.sequelize.sync({ force: false , alter : true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/",(req,res)=>{
  res.render("form")
});

require("./app/routes/user.routes")(app);
require('./app/routes/auth.routes')(app);
const PORT=process.env.PORT ||8080;
app.listen(PORT,()=>{
  console.log(`server is running on port${PORT}.`);
});
