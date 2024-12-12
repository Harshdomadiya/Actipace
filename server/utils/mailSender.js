const nodemailer = require("nodemailer")

const mailSender = async (email,title,body) =>{
    try{
        
        let transpoter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        let info = await transpoter.sendMail({
            from:"Actipece",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        console.log(info)

    }catch(e){
        console.log(e.message); 
    }
}
module.exports = {mailSender};