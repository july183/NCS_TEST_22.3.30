var express = require('express')
var router = express.Router();


router.get('/',(req, res) => {
    res.send('/sqsend');
})
router.get('/getsend',(req, res) => {
    res.send({'url':'/sqsend/getsend'});
})



module.exports = router;