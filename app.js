//导入模块
let express = require('express');

var svgCaptcha = require('svg-captcha');

let path = require('path');

let app = express();

app.use(express.static('static'));

//路由一
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/views/login.html'));
})

//路由二
app.get('/login/captchaImg',(req,res)=>{
    var captcha = svgCaptcha.create();
    // req.session.captcha = captcha.text;
    console.log(captcha.text);
    res.type('svg');
    res.status(200).send(captcha.data);
})

app.listen(8848,'127.0.0.1',()=>{
    console.log('success');
})

