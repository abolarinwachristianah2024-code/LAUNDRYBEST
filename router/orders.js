const router = require("express").Router();
const { createOrder } = require('../controller/orders')

const { upload } = require('../middlewares/multer')

router.post("/order/:orgId", upload.single('images'), createOrder);

module.exports = router;