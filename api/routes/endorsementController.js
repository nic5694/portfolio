var express = require('express');
var router = express.Router();
const endorsementService = require('../services/endorsementService')
// let cors = require('cors');
var morgan = require('morgan');
let cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 //
}
router.use(morgan('dev'));
router.use(cors(corsOptions))
/* GET home page. */
router.get('', function(req, res) {
    return endorsementService.getAllEndorsements(res);
});

router.post('', function(req, res) {
    console.log("POST")
    console.log(req.body)
    return endorsementService.addEndorsement(req, res);
});

router.get('/:id/approve', function(req,res){
    return endorsementService.approveEndorsement(req, res);
})

router.get('/:id/reject', function(req,res){
    return endorsementService.rejectEndorsement(req, res);
})

module.exports = router;
