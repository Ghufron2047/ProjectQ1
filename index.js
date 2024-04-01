const express = require('express')
const app = express()
const port = 3002
//pemanggilan request body parse
const bodyParser = require('body-parser')

//pemanggilan file config.js di index.js
const db = require('./config.js')

const response = require('./request.js')

//penggunaan body parse
app.use(bodyParser.json())

//tambahkan route get data
app.get('/buku', (req, res)=>{
    const sql = 'SELECT * FROM buku'
    db.query(sql,(error, result)=>{
        response(200,result,'data buku',res)
    })
})

app.post('/buku', (req, res)=>{
    const {id_buku, judul, jumlah, id_penulis, id_kategori}=req.body
    const sql = `INSERT INTO  buku (ID_BK, JUDUL, JML, ID_PN, ID_KT) value ('${id_buku}','${judul}','${jumlah}','${id_penulis}','${id_kategori}');`

    db.query(sql,(error,fields)=>{
        if(error) response(500, 'invalid', `${id_buku} dengan Judul buku ${judul} sudah ditambahkan`, res)
        if(fields?.affectedRows){
            const data ={
                isSucces: fields.affectedRows,
                id:fields.insertId,
            }
            response(200,data,"Data berhasil disimpan",res)
        }
    })
})


app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})
