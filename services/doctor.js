const DoctorModel = require('../configs/models/doctor');

async function createDoctor(doctor) {
    let result;
    const newDoctor = new DoctorModel(doctor);
    result = await newDoctor.save();
    return result;
}

async function getAllDoctors(perPage, page) {
    let result;
    result = await DoctorModel.find().limit(perPage).skip(perPage * page).exec();
    return result;
}

async function updateDoctor(id, doctor) {
    let result;
    const currentDoctor = await DoctorModel.findById(id).exec();
    currentDoctor.set(doctor);
    result = await currentDoctor.save();
    return result;
}

async function getDoctor(id) {
    let doctor;
    doctor = await DoctorModel.findById(id).exec();
    return doctor;
}

async function deleteDoctor(id) {
    let result;
    result = await DoctorModel.deleteOne({_id: id}).exec();
    return result;
}

module.exports = {
    deleteDoctor: deleteDoctor,
    getDoctor: getDoctor,
    updateDoctor: updateDoctor,
    getAllDoctors: getAllDoctors,
    createDoctor: createDoctor
};
