const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!!tjems0212',
    database: 'fammunity'
})

connection.connect((err) => {
    if (err) {
        console.error('MYSQL 연결 실패')
        return;
    }
    console.log('MYSQL 연결 성공')
})

connection.query('SELECT * FROM crops', (err, results) => {
    if (err) {
        console.error('데이터 조회 중 오류 발생: ', err) 
        return;
    }
    console.log('조회된 데이터: ', results)
})