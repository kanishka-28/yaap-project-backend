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
        const { email,name } = req.body;
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
            text: `Hello {name goes here}

            Thank you for signing up to our event! We are really looking forward to
            having you here.
            
            Here is the link to join : https://spatial.io/s/Yaap-Main-Venue-62d717a487de560001106ab9 
            
            Reply to this email if you have any questions. 
            We are here to help! 
            
            Regards,
            YAAP`,
            html: `<strong>Hello ${name}<strong/><br/><br/><p font-size: 14px; font-weight: normal; color: black;>Thank you for signing up to our event! We are really looking forward to having you here.<p/><br/><p>Here is the link to join : <a href="https://spatial.io/s/Yaap-Main-Venue-62d717a487de560001106ab9">https://spatial.io/s/Yaap-Main-Venue-62d717a487de560001106ab9</a> <p/><p>Reply to this email if you have any questions. <p/><p>We are here to help! <p/> <br/> <p>Regards,<p/><strong>YAAP<strong/>`
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