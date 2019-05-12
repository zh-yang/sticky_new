var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/usersql').UserSQL;

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

/* GET home page. */
router.get('/', function(req, res, next) {
    var data;

    if(req.cookies.user){
        var user = {
            uname: req.cookies.user.uname,
            ukey: req.cookies.user.ukey
        }
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.checkKey, [user.uname, user.ukey], function (err, result) {
                console.log(err);
                if (result && result.length > 0) {
                    data = {
                        isLogin: true,
                        user: user.uname
                    }
                } else {
                    data = {
                        isLogin: false
                    }
                }
                res.render('index', data);
                connection.release()
            })
        })
    }else{
        data = {
            isLogin: false
        }
        res.render('index', data);
    }

});

module.exports = router;
