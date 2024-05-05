const router = require("express").Router();

const bookController = require("../controllers/bookController");

const upload = require("../config/multer");

router.get("/", bookController.getAllBook);
router.post("/", upload.single("file"), bookController.createBook);
router.patch("/cover/:id",upload.single("file"),bookController.addCover)
router.delete("/:id",bookController.removeBook)

module.exports = router;
