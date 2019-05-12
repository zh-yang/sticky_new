var NotesSQL = {
	insert: 'INSERT INTO stickyNotes(content, uname, ukey) VALUES(?,?,?)',
	delete: 'DELETE FROM stickyNotes WHERE id = ? and ukey = ?',
	update: 'UPDATE stickyNotes SET content = ? WHERE id = ? and ukey = ?',
	queryAll: 'SELECT * FROM stickyNotes'
}
var UserSQL = {
    insert: 'INSERT INTO stickyUsers(uname,ukey) VALUES(?,?)',
    delete: 'DELETE FROM stickyUsers WHERE id = ?',
    update: 'UPDATE stickyUsers SET content = ? WHERE id = ?',
    queryAll: 'SELECT * FROM stickyUsers',
	checkKey: 'SELECT * FROM stickyUsers WHERE uname = ? and ukey = ?',
	checkUser: 'SELECT * FROM stickyUsers WHERE uname = ?'
}

module.exports = {UserSQL,NotesSQL}