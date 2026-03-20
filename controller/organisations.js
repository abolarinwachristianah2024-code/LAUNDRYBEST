const { organizations } = require('../models')
const cloudinary = require('../middlewares/cloudinary')
const fs = require('fs')

exports.createOrg = async(req, res) => {
    try {
        const file = req.file
        
        const uploadResponse = await cloudinary.uploader.upload(file.path);

        const extractSecureurl = uploadResponse.secure_url;
        // console.log(uploadResponse);
        console.log("file", req.file);

        const filePath = req.file.path;
        await fs.promises.unlink(filePath)

        const { name, address, emails, phoneNo} = req.body

        const newOrg = await organizations.create({
            name,
            address,
            emails,
            phoneNo,
            logo: extractSecureurl
        })
        res.status(201).json({
            message: "Organisation Created Successfully",
            data: newOrg
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}