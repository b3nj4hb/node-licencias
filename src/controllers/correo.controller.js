const {} = require ('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response)=>{
    let body = req.body;

    let config = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "chrisdigi85@gmail.com",
      pass: "judfyxlmsbwdnmhl", 
    }
    });

    const opciones = {
        from: "Minucipalidad de Lurigancho-Chosica",
        to: body.email,
        subject:"Enviado desde el área de licenciamiento",
        text:"Felicidades ya tienes tu licencia"
    };

    config.sendMail(opciones, function(error,result){

        if(error) return resp.json({ok:false, msg:error})

        return resp.json({
            ok:true,
            msg:result
        });
    })

}

module.exports = {
    envioCorreo
}