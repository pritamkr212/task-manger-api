const sgmail=require('@sendgrid/mail')


sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgmail.send({
        to:email,
        from:'empritam212@gmail.com',
        subject:'thanks for joining us',
        text:`welcome to ur app, ${name}. let me how would u like this app`
    })
}

const sendCancelationEmail=(email,name)=>{
    sgmail.send({
        to:email,
        from:'empritam212@gmail.com',
        subject:`Good bye hope we will see u soon${name}`,
        text:'please give a reply with feedback how we can improve this'
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}