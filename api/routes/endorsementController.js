var express = require('express');
var router = express.Router();
const endorsementService = require('../services/endorsementService')

/* GET home page. */
router.get('', function(req, res) {
    return endorsementService.getAllEndorsements(res);
});

router.post('', function(req, res) {
    return endorsementService.addEndorsement(req, res);
});

router.put('/:id/approve', function(req,res){
    return endorsementService.approveEndorsement(req, res);
})

router.put('/:id/reject', function(req,res){
    return endorsementService.rejectEndorsement(req, res);
})

module.exports = router;
