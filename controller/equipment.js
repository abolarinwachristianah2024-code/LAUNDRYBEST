const { equipment } = require('../models')
const cloudinary = require('../middlewares/cloudinary')
const fs = require('fs')
const { log } = require('console')

exports.createEquipment = async(req, res) => {
    try {
        const file = req.file
        const uploadResponse = await cloudinary.uploader.upload(file.path);
        const extractSecureurl = uploadResponse.secure_url;

        if (!req.file) {
            return res.status(400).json({ 
                message: "No file uploaded" 
            });
        }
        const filePath = req.file.path;
        await fs.promises.unlink(filePath)

        const { name, price, expiringDate } = req.body
        const { orgId } = req.params
        const newEquipment = await equipment.create({
            name,
            price,
            expiringDate,
            orgId,
            images: extractSecureurl
        })
        res.status(201).json({
            message: "Equipment created successfully",
            data: newEquipment
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}