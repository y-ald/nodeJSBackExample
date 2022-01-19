const DonorModel = require('../configs/models/donor');

async function createDonor(donor) {
    let result;
    const newDonor = new DonorModel(donor);
    result = await newDonor.save();
    return result;
}

async function getAllDonors(perPage, page) {
    let result;
    result = await DonorModel.find().limit(perPage).skip(perPage * page).exec();
    return result;
}

async function updateDonor(id, donor) {
    let result;
    const currentDonor = await DonorModel.findById(id).exec();
    currentDonor.set(donor);
    result = await currentDonor.save();
    return result;
}

async function getDonor(id) {
    let donor;
    donor = await DonorModel.findById(id).exec();
    return donor;
}

async function deleteDonor(id) {
    let result;
    result = await DonorModel.deleteOne({_id: id}).exec();
    return result;
}

module.exports = {
    deleteDonor: deleteDonor,
    getDonor: getDonor,
    updateDonor: updateDonor,
    getAllDonors: getAllDonors,
    createDonor: createDonor
};
