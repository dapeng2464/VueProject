var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//var $sql = require('../sqlMap');
var nodemailer = require('nodemailer');

// connect to da
//var conn = mysql.createConnection(models.mysql);//
var pool=mysql.createPool(models.mysql);
var query=function(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows,fields) {
            callback(err,rows,fields);
            connection.release();
        });
    });
}
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'test24642464@gmail.com',
        pass: 'test2464'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

//conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: 'opration error'
        });
    } else {
        res.json(ret);
        //console.log("mysql connected");
    }
};

var sendmail = function(addr,manager,employee){
    var option = {
        from:'test24642464@gmail.com',
        to:'dapeng2703@163.com,'+addr,
        cc:'test24642464@gmail.com',
        subject : 'employee confirmation',
        text:'hello',
        html : '<b>Hi '+manager+', please confirm your employee'+employee+' in following link:</b><br>'
        +'<b>http://127.0.0.1:8080/#/confirm?eName='+employee+'&mName='+manager+'</b>'
    }
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("fail: " + error);
        }else{
            console.log("Email sent success " );
        }
    });
};

// user API
//add user
router.post('/addUser', (req, res) => {
    
    var params = req.body;
    var name = params.username;
    var age = params.age;
    var sql = "insert into user(id, name, age) values(0,'"+name+"','"+ age +"')";
    console.log(params);
    query(sql,  function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// get data from db
router.post('/searchAll', (req, res) => {
    var sql = "select * from emtable";
    var params = req.body;
    console.log("searchAll request get"+sql);
    
    query(sql,function(err, result,fields) {
        if (err) {
            console.log("error appear");
            console.log(err);
            return;
        }
        if (result) {
            //jsonWrite(res, result);
            //res.render("users",{title:"用户列表",datas:result});
            res.send(result);
            console.log('searchAll success');
        }
    })
});
//update status
router.post('/setStatus', (req, res) => {
    
    var params = req.body;
    var name = params.employee;
    var status = params.status;
    var sql = "update emTable set status = '"+ status  +"' where employee = '" + name+"'";
    console.log(params);
    query(sql,  function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/send', (req, res) => {
    var params = req.body;
    var addr = params.addr;
    var manager = params.manager;
    var employee = params.employee;
    sendmail(addr,manager,employee);
});



module.exports = router;