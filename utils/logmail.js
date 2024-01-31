var nodemailer = require('nodemailer'); //nodemailer package from npm => npm i nodemailer => below code is default syntax.


require('dotenv').config();


const logmail = ()=>{
  console.log("Inside log email")
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  
  
  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.PERSONAL_MAIL,
    subject: 'A user has sent birthday greetings.',
    text: 'Hey Mahesh, A user has sent Birthday greetings using 12AmWish application.'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = logmail;
