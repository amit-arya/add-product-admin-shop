const path = require('path');

exports.contactus = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'contactus.html'));
}

exports.success = (req,res,next) => {
    res.status(404).send("Form filled successfully");
  }