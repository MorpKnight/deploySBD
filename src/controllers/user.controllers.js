const userServices = require('../services/user.services');

exports.addMahasiswa = async function (req, res) {
    try {
        const result = await userServices.addMahasiswa(req.body);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getMahasiswa = async function (req, res) {
    try {
        const result = await userServices.getMahasiswa();
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateMahasiswa = async function (req, res) {
    try {
        const result = await userServices.updateMahasiswa(req.params.id, req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteMahasiswa = async function (req, res) {
    try {
        const result = await userServices.deleteMahasiswa(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}