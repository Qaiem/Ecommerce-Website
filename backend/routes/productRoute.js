import express from 'express';
import upload from '../middleware/multer.js'; // Import the multer configuration
import { listProduct, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'; // Ensure .js extension
import { authenticateAdmin } from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Route to add a product with image upload
productRouter.post('/add',authenticateAdmin,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addProduct); // Use multer for handling image uploads

// Route to remove a product
productRouter.post('/remove',authenticateAdmin,removeProduct);

// Route to get a single product
productRouter.post('/single', singleProduct);

// Route to list products
productRouter.get('/list', listProduct);

export default productRouter;
