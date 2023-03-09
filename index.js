const express = require('express');
const reqFilter = require('./middleware.js');
const route = express.Router();

const path = require('path');
const publicPath = path.join(__dirname,'public');

const  app  = express();

app.set('view engine','ejs');

route.use(reqFilter);
//app.use(reqFilter)
//console.log(publicPath);

//app.use(express.static(publicPath))

app.get('', (req, res)=>{
     //console.log("sent by browser"+req.query.name)
      res.sendFile(`${publicPath}/index.html`);
});

app.get('/about',reqFilter,  (req, res)=>{
    //console.log("sent by browser"+req.query.name)
     res.sendFile(`${publicPath}/about.html`);
});

app.get('/profile', (req, res)=>{
     const user = {
          name: 'rizwan',
          email: 'riz@riz.com',
          city: 'karachi',
          skills: ['html','js','php','node','css']          
     }
     //console.log("sent by browser"+req.query.name)
      res.render('profile',{user});
 });
 
 app.get('/login',(req, res)=>{
     res.render('login');
 });
 
 app.get('/home', (req, res)=>{
   // console.log("sent by browser"+req.query.name)
     res.sendFile(`${publicPath}/home.html`);
});


app.get('*', (req, res)=>{
    //console.log("sent by browser"+req.query.name)
     res.sendFile(`${publicPath}/404.html`)
});

// app.get('/about', (req, res)=>{
//     res.send([{
//         name: "rizwan",
//         phone: "2222222"
//     },
//     {
//         name: "yahya",
//         phone: "333"
//     },])
// });

app.listen(4300)