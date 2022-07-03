require('dotenv').config()
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  // host: 'smtp.gmail.com',
  secure: false,
  port: 587,
  auth: {
    user: process.env.NAME,
    pass: process.env.PW
  },
  tls: {
    ciphers:'SSLv3'
}
});

async function run() {
    let sendResult = await transporter.sendMail({
        from: 'rosterboxhq@gmail.com',
        to: 'rosterboxhq@gmail.com',
        subject: 'Sending Email using Node.js',
        html: 'Hi this is rosterbox',
        attachments: [{ filename: 'BaseballGuy2.png', path: './attachments/BaseballGuy2.png'  }]
    })

    console.log(sendResult)
}

run().catch(err => console.log(err))