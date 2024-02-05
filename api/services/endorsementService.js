const Endorsement = require('../models/Endorsement');
const EndorsementStatus = require('../models/EndorsementStatus');

async function getAllEndorsements(res) {
    try {
        const endorsements = (await Endorsement.find().exec()).filter(endorsement => endorsement.status === EndorsementStatus.APPROVED)
        res.json(endorsements);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function addEndorsement(req, res){
    try{
        req.body.status = EndorsementStatus.PENDING;
        const endorsement = new Endorsement(req.body);
        const newEndorsement = await endorsement.save();
        res.status(201).json(newEndorsement);
    }
    catch (err){
        res.status(400).json({ message: err.message });
    }
}
async function approveEndorsement(req, res){
    try{
        const endorsement = await Endorsement.findById(req.params.id);
        endorsement.status = EndorsementStatus.APPROVED;
        if (res.body.rating === undefined){
            res.status(400).json({ message: "Rating needs to be set to finalize endorsement approval process." });
        }
        const updatedEndorsement = await endorsement.save();
        res.status(200).json(updatedEndorsement);
    }catch (err){
        res.status(400).json({ message: err.message });
    }
}
async function rejectEndorsement(req, res){
    try{
        const endorsement = await Endorsement.findById(req.params.id);
        endorsement.status = EndorsementStatus.REJECTED;
        const updatedEndorsement = await endorsement.save();
        res.status(200).json(updatedEndorsement);
    }catch (err){
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllEndorsements,
    addEndorsement,
    approveEndorsement,
    rejectEndorsement
};


