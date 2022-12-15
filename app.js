const path =require('path');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactus = require('./routes/contactus');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactus);

app.use('/success',(req,res,next) => {
  res.status(404).send("Form filled successfully");
});

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'NotFound.html'));
})

app.listen(4000);
