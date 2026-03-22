const router = require("express").Router();
const { createEquipment } = require('../controller/equipment');
const { upload } = require('../middlewares/multer');

router.post("/equipment/:orgId", upload.single('images'), createEquipment);

module.exports = router;