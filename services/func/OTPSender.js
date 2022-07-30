

// const axios = require('axios');
// const FormData = require('form-data');

// const sendOTPMessage = async () => {
//     try {
//         const data = new FormData();
//         data.append('mobile', '8103285159');
//         data.append('sender_id', 'D7VERIFY');
//         data.append('message', 'Hey customer your OTP code is {code}');
//         data.append('expiry', '900')

//         console.log(data);

//         const response = await axios.post('https://d7networks.com/api/verifier/send',
//             { data: data },
//             {
//                 headers: {
//                     Authorization: 'Token dd319396ebb7950d5ec9a809a12655a988153114',
//                     ...data.getHeaders(),
//                 }
//             });
//         console.log('data->', response?.data)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// sendOTPMessage();










const http = require("https");

const options = {
  "method": "GET",
  "hostname": "api.msg91.com",
  "port": null,
  "path": "/api/v5/otp?template_id=&mobile=&authkey=",
  "headers": {
    "Content-Type": "application/json"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("{\"Value1\":\"Param1\",\"Value2\":\"Param2\",\"Value3\":\"Param3\"}");
req.end();












const express = require("express");
const Router = express.Router();
const axios = require('axios');
const FormData = require('form-data');

const sendOTPMessage = async()=>{
    try {
        const data = new FormData();
        data.append('mobile','8103285159');
        data.append('sender_id','');
        data.append('message','Hey customer your OTP code is {code}');
        data.append('expiry','900')

        const response = await axios({
            method: 'POST',
            url: 'http://d7networks.com/api/verification',
            headers: {
                Authorization: 'Token cGl2ZzI0MTY6aHhDU285eGs=',
                ...data.getHeaders(),
            },
            data: data,
        });
        console.log('data->', response?.data)
    } catch (error) {
        
    }
}

sendOTPMessage();

module.exports = Router;