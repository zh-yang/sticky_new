var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var notesSQL = require('../db/usersql').NotesSQL;
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



/* 获取所有的 notes */

router.get('/notes', function (req, res, next) {
    var user = {};
    if(req.cookies.user) {
        user = {
            uname: req.cookies.user.uname,
            ukey: req.cookies.user.ukey
        }
    }
    pool.getConnection(function (err, connection) {
        connection.query(notesSQL.queryAll, null, function (err, result) {
            responseJSON(res, {notes: result,uname:user.uname})
            connection.release()
        })
    })
});

/*新增note*/
router.post('/note/add', function (req, res, next) {
    // 获取前台页面传过来的参数
    var note = req.body.note;

    if(req.cookies.user){
        var user = {
            uname: req.cookies.user.uname,
            ukey: req.cookies.user.ukey
        }
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.checkKey, [user.uname, user.ukey], function (err, result) {
                if (result && result.length > 0) {
                    connection.query(notesSQL.insert, [note, user.uname, user.ukey], function (err, result) {
                        console.log(result)
                        if (result) {
                            result = {
                                code: 200,
                                msg: '增加成功',
                                insertId: result.insertId
                            };
                            responseJSON(res,result)
                        }

                    });
                } else {
                    result = {
                        code: -200,
                        msg: '请先登录'
                    }
                    responseJSON(res,result)
                }
                connection.release()
            })
        })
    }else{
        result = {
            code: -200,
            msg: '请先登录'
        }
        responseJSON(res,result)
    }

})

/*修改note*/
router.post('/note/edit', function (req, res, next) {
    var note = req.body.note;
    var noteId = req.body.id;
    if(req.cookies.user){
        var user = {
            uname: req.cookies.user.uname,
            ukey: req.cookies.user.ukey
        }
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.checkKey, [user.uname, user.ukey], function (err, result) {
                if (result && result.length > 0) {
                    console.log(user.ukey)
                    connection.query(notesSQL.update, [note, noteId, user.ukey], function (err, result) {
                        console.log(result);
                        if (result&&result.changedRows) {
                            result = {
                                code: 200,
                                msg: '修改成功'
                            };
                        }else{
                            result = {
                                code: -200,
                                msg: '你没有权限'
                            };
                        }
                        // 以json形式，把操作结果返回给前台页面
                        responseJSON(res, result);
                        connection.release()
                    });
                } else {
                    result = {
                        code: -200,
                        msg: '请先登录'
                    }
                    responseJSON(res,result)
                    connection.release()
                }

            })
        })
    }else{
        result = {
            code: -200,
            msg: '请先登录'
        }
        responseJSON(res,result)
    }


})

/*删除note*/
router.post('/note/delete', function (req, res, next) {
    var noteId = req.body.id
    console.log(noteId)

    if(req.cookies.user){
        var user = {
            uname: req.cookies.user.uname,
            ukey: req.cookies.user.ukey
        }
        pool.getConnection(function (err, connection) {
            connection.query(userSQL.checkKey, [user.uname, user.ukey], function (err, result) {
                if (result && result.length > 0) {
                    console.log(user.ukey)
                    connection.query(notesSQL.delete, [noteId,user.ukey], function (err, result) {
                        console.log(result);
                        if (result&&result.affectedRows) {
                            result = {
                                code: 200,
                                msg: '删除成功'
                            };
                        }else{
                            result = {
                                code: -200,
                                msg: '你没有权限'
                            };
                        }
                        // 以json形式，把操作结果返回给前台页面
                        responseJSON(res, result);
                        connection.release()
                    });
                } else {
                    result = {
                        code: -200,
                        msg: '请先登录'
                    }
                    responseJSON(res,result)
                    connection.release()
                }

            })
        })
    }else{
        result = {
            code: -200,
            msg: '请先登录'
        }
        responseJSON(res,result)
    }

})

module.exports = router;