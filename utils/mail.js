var nodemailer = require('nodemailer'); //nodemailer package from npm => npm i nodemailer => below code is default syntax.

const mail = (receiverMail, receiverName, userName)=>{
  console.log("receiver44 "+ receiverName, userName)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maheswarareddy194@gmail.com',
      pass: 'mouoenpjdoigjedf'
    }
  });
  
  
  var mailOptions = {
    from: 'maheswarareddy194@gmail.com',
    to: receiverMail,
    subject: 'Birthday Greetings From ' + userName,
    text: 'Hey '+ receiverName +', \n'+ userName +' has sent you a birthday Greeting note. \n\n\"Happy Birthday to an amazing friend! 🎉 May your day be filled with joy, laughter, and unforgettable moments. Wishing you another year of love, success, and all the incredible experiences life has to offer. Cheers to you and the wonderful friendship we share! 🎂🎁🥳. And remember \n-> Be You Always🤍. \"'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = mail;
