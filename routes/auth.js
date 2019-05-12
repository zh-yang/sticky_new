var express = require('express');
var router = express.Router();

var secret = 'aFdfg_hijK12lm35sfhhDB'

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/usersql').UserSQL;

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200', msg: '操作失败'
        });
    } else {
        res.json({status: 0, data: ret});
    }
};
/* GET login page. */
router.get('/login', function(req, res, next) {
    var data = null;
    res.render('login', data);
});
/* GET login page. */
router.get('/register', function(req, res, next) {
    var data = null;
    res.render('register', data);
});
router.post('/login', function (req, res, next) {
    var user = {
        uname: req.body.username,
        ukey: req.body.password + secret
    }
    pool.getConnection(function (err, connection) {
        connection.query(userSQL.checkKey, [user.uname, user.ukey], function (err, result) {
            console.log(err);
            if (result && result.length > 0) {
                res.cookie("user",{"uname": user.uname,"ukey": user.ukey},{maxAge:1000*60*60});
                res.redirect('/')
            } else {
                result = {
                    code: -200,
                    msg: '用户名不存在或密码错误'
                };
                responseJSON(res, result)
            }
            // if(result){
            //     result = {
            //         code: 200,
            //         msg: '登陆成功'
            //     };
            //     res.cookie("user",{"uname": 'admin',"ukey":'admin123'},{maxAge:1000*60*60});
            //     res.redirect('/')
            // }

            connection.release()
        })
    })

})
router.post('/register', function (req, res, next) {
    var user = {
        uname: req.body.username,
        ukey: req.body.password + secret
    }
    pool.getConnection(function (err, connection) {
        connection.query(userSQL.checkUser, user.uname, function (err, result) {
            console.log(result);
            if (result && result.length === 0) {
                connection.query(userSQL.insert, [user.uname,user.ukey], function (err, result) {
                    if(result){
                        res.redirect('/auth/login')
                    }
                })
            } else {
                result = {
                    code: -200,
                    msg: '用户名存在'
                };
                responseJSON(res, result)
            }
            connection.release()
        })
    })

})

router.get('/logout', function(req, res) {
    res.clearCookie('user');

    res.redirect('/')
});

module.exports = router;