const DonationModel = require('../configs/models/donation');

async function createDonation(donation) {
    let result;
    const newDonation = new DonationModel(donation);
    result = await newDonation.save();
    return result;
}

async function getAllDonations(perPage, page) {
    let result;
    result = await DonationModel.find().limit(perPage).skip(perPage * page).exec();
    return result;
}

async function updateDonation(id, donation) {
    let result;
    const currentDonation = await DonationModel.findById(id).exec();
    currentDonation.set(donation);
    result = await currentDonation.save();
    return result;
}

async function getDonation(id) {
    let donation;
    donation = await DonationModel.findById(id).exec();
    return donation;
}

async function deleteDonation(id) {
    let result;
    result = await DonationModel.deleteOne({_id: id}).exec();
    return result;
}

module.exports = {
    deleteDonation: deleteDonation,
    getDonation: getDonation,
    updateDonation: updateDonation,
    getAllDonations: getAllDonations,
    createDonation: createDonation
};
