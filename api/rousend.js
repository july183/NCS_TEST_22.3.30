var express = require('express')
var router = express.Router();
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig);

router.use(express.urlencoded({extended : true}))

router.get('/', (req, res,next) => {
    var botable = req.query.botable
    // ~~~~?botable=conent_interview
    pool.getConnection(function(err,connection){
      if(botable == 'conent_interview'){//여기서 보테이블은 qna이다
        connection.query(
          'SELECT * FROM introduce.'+botable,
          (error, result) => {
            if (error) throw error;
            res.send(result);
          })
        connection.release();  
      }else{
        var accident = require('../api/postsend')
        router.use('/', accident )
        next('route')
      }
    })
  })

module.exports = router;