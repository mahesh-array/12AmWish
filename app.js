const path = require('path');
const express = require('express');
const app = express();
const schedule = require('node-schedule');
const mail = require('./utils/mail')

//job scheduler function(my own function)
const jobscheduler = (bdayYYYY, bdayMM, bdayDD, TZadjust, receiverName, userName) =>{
    // console.log(bdayYYYY,bdayMM,bdayDD);
    const date = new Date(bdayYYYY+"-"+bdayMM+"-"+bdayDD+"T00:00:00.000"+TZadjust); //you can adjust the time here for testing purposes.
    console.log(date);
    schedule.scheduleJob(date, function(){          //node scheduler main function(defalut syntax) .
        mail(receiverMail, receiverName, userName);//calling the mail function inside the scheduler function to schedule mails.
        
    })

}


app.use(express.static('public'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('<h1>h1</h1>');
})
app.post('/',(req,res)=>{
    const parcel = req.body;
    receiverMail = parcel.parcel
    userName = parcel.usernameParcel
    receiverName = parcel.receivernameParcel
    bdayDD = parcel.dateParcel
    bdayMM = parcel.monParcel
    bdayYYYY = parcel.yearParcel
    timezone = parcel.timezoneParcel
    
    console.log(timezone)
    console.log(bdayDD,bdayMM,bdayYYYY);



    if(parcel){ 

        console.log("Loading...")
        console.log("reciver2 "+receiverName)
        var TZadjust;
        if(timezone == 'EST'){
            TZadjust = "-05:00"
        }else if(timezone == 'CST'){
            TZadjust = "-06:00"
        }else if(timezone == 'PST'){
            TZadjust = "-08:00"
        }else if(timezone == 'MST'){
            TZadjust = "-07:00"
        }else{
            TZadjust = "+05:30"
        }



        jobscheduler(bdayYYYY, bdayMM, bdayDD, TZadjust, receiverName, userName);

        // return res.status(400).send({ status : 'failed'})
    }
    // res.status(200).send({status : 'received'});
})









app.listen(3000,()=>{
    console.log("server is upon 3000");
})