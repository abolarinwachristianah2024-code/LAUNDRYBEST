const router = require("express").Router();
const { createEquipment, getEquipmentByOrgId } = require('../controller/equipment');
const { upload } = require('../middlewares/multer');

router.post("/equipment/:orgId", upload.single('images'), createEquipment);
router.get("/equipment/:orgId", getEquipmentByOrgId);

module.exports = router;