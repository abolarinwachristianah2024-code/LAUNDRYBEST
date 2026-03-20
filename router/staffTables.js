const router = require("express").Router()

const { createStaff } =  require('../controller/staffTables')

const { upload } = require('../middlewares/multer')


router.post("/staff/:orgId", upload.fields([{name: 'staffDp'}, {name: 'profilePhoto'}]), createStaff)

module.exports = router