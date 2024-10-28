import multer from 'multer';

// Set up storage location and filename format
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
        callback(null,file.originalname)
  }
});

// Initialize multer with storage configuration
const upload = multer({ storage });

export default upload;
