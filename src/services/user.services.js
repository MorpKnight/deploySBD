const User = require('../models/user.models')

exports.addMahasiswa = async function (body) {
    try {
        const { name, npm, jurusan } = body;
        const user = new User({ name, npm, jurusan });
        await user.save();
        return { message: 'Mahasiswa added successfully', data: user };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getMahasiswa = async function () {
    try {
        const users = await User.find();
        return { message: 'Success', data: users };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateMahasiswa = async function (id, body) {
    try {
        const { name, npm, jurusan } = body;
        const userObj = await User.findByIdAndUpdate(id, { name, npm, jurusan }, { new: true }).exec();
        if (!userObj) throw new Error('Mahasiswa not found');

        return { message: 'Mahasiswa updated successfully', data: userObj };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteMahasiswa = async function (id) {
    try {
        const userObj = await User.findByIdAndDelete(id).exec();
        if(!userObj) throw new Error('Mahasiswa not found');

        return { message: 'Mahasiswa deleted successfully', data: userObj };
    } catch (error){
        throw new Error(error.message);
    }
};
