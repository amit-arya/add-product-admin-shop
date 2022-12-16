const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactus = require('./routes/contactus');
const errorController = require('./controllers/NotFound');
const contactController = require('./controllers/contact_succ');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactus);

app.use('/success',contactController.success);

app.use(errorController.get404);

app.listen(3000);
