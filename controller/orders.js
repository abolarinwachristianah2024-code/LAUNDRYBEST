const { orders } = require('../models')
const cloudinary = require('../middlewares/cloudinary')
const fs = require('fs')

exports.createOrder = async(req, res) => {
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

        const { type, amount, status, staff_id } = req.body
        const { orgId } = req.params
        const newOrder = await orders.create({
            type,
            amount,
            status,
            staff_id,
            orgId,
            images: extractSecureurl
        })
        res.status(201).json({
            message: "Order created successfully",
            data: newOrder
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}