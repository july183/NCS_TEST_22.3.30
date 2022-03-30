var app = require('express')();
var rousend = require('./api/rousend')

app.get('/',(req,res) => {
      res.send('첫페이지 무사출력')
})

app.use('/rousend',rousend)

app.listen(8080, () => {
       console.log('콘솔창을 확인 서버구동완료');
})

