const express = require('express');
const multer = require('multer');
const { engine } = require('express-handlebars');
const bp = require('body-parser');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(express.static('./public'));