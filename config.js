//request library mysql
const mysql = require('mysql')

//variabel koneksi untuk database
const db = mysql.createConnection({
    host:'sql6.freesqldatabase.com',
    user:'sql6702734',
    password: 'abXl9aHYZx',
    database:'sql6702734'
})

//kirimkan variabel keluar untuk digunakan diluar file
module.exports = db