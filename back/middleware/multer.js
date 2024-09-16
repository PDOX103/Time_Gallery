import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        // Use file.originalname instead of originalName
        callback(null, file.originalname);
    }
});

const upload = multer({ storage });

export default upload;
