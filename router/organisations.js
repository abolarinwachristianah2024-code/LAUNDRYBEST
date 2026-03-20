const router = require("express").Router()

const { createOrg } =  require('../controller/organisations')

const { upload } = require('../middlewares/multer')


router.post("/organisation", upload.single('logo'), createOrg)

module.exports = router