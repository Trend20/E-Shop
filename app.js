const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const ejsLint = require('ejs-lint');


// initialize eprexx app
const app = express();

// use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// setting the view engine
app.set('view engine', 'ejs');

// adding static files
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views/pages')); 

// routes

// home
app.get('/', (req, res) =>{
    res.render('index');
})

// about route
app.get('/about', (req, res) =>{
    res.render('about');
});

// category route
app.get('/category', (req, res) =>{
    res.render('category');
});

// contact-us route
app.get('/contact', (req, res) =>{
    res.render('contact');
});


// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Application running on port ${PORT}`);
});