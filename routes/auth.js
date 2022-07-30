const express = require("express");
const Router = express.Router();
var nodemailer = require('nodemailer');

/* 
Route     /mail
descrip   sending mail
params    none
access    public
method    post
*/

Router.post("/mail", async (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kanishkagour28@gmail.com',
                pass: 'riedtbkykzdwsfuh'
            }
        });

        var mailOptions = {
            from: 'kanishkagour28@gmail.com',
            to: email,
            subject: 'Yaap Event',
            text: `Hey!!, You have successfully registered for the yaap event`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                // console.log(error);
                return res.status(500).json({ error: error.message });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


module.exports = Router;