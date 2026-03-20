const { staffTables } = require('../models')
const cloudinary = require('../middlewares/cloudinary')
const fs = require('fs');
const { promises } = require('dns');

exports.createStaff = async(req, res) => {
    try {
        const files = req.files.staffDp;

        const allfilePath = files.map((picsPath) => picsPath.path);
                console.log("files", allfilePath);

        const uploadToCloudinary = allfilePath.map((photoPath) => cloudinary.uploader.upload(photoPath));

        const uploadResponse = await Promise.all(uploadToCloudinary);
        const secureurl = uploadResponse[0].secure_url;
        // console.log(uploadTocloudinary);
        console.log("files", files);

        await Promise.all(
            files.map((e) => {
                fs.unlinkSync(e.path); 
            }),
        );

        const ppfiles = req.files.profilePhoto;

        const allfilePaths = ppfiles.map((picsPath) => picsPath.path);
                console.log("ppfiles", allfilePaths);

        const uploadToCloud = allfilePaths.map((photoPath) => cloudinary.uploader.upload(photoPath));

        const uploadResponses = await Promise.all(uploadToCloud);
        const extractSecureurl = uploadResponses[0].secure_url;
        // console.log(uploadToCloud);
        console.log("ppfiles", ppfiles);

        await Promise.all(
            ppfiles.map((e) => {
                fs.unlinkSync(e.path); 
            }),
        );

        const { name, position, salary } = req.body
        const { orgId } = req.params

        const newStaff = await staffTables.create({
            name,
            position,
            salary,
            orgId,
            staffDp: secureurl,
            profilePhoto: extractSecureurl
        })
        res.status(201).json({
            message: "staff profile created successfully",
            data: newStaff
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}