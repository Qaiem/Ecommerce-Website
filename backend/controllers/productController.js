import productModel from '../models/productModel.js'; // Adjust the import path based on your project structure

// List all products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Add a new product with multiple image uploads
const addProduct = async (req, res) => {
  const { name, price, description } = req.body; // Extract product details from the request body
  const images = req.files; // Get the uploaded files

  try {
    // Check if images were uploaded
    if (!images || images.length === 0) {
      return res.status(400).json({ message: 'At least one image is required' });
    }

    // Create an array of image paths
    const imagePaths = images.map(image => image.path); // Assuming each image has a path property

    // Create a new product instance
    const newProduct = new productModel({
      name,
      price,
      description,
      images: imagePaths, // Store the array of image paths in the product object
    });

    await newProduct.save(); // Save the new product to the database
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};

// Remove a product
const removeProduct = async (req, res) => {
  const { productId } = req.body; // Get product ID from the request body

  try {
    const deletedProduct = await productModel.findByIdAndDelete(productId); // Delete the product from the database
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product', error });
  }
};

// Get a single product
const singleProduct = async (req, res) => {
  const { productId } = req.body; // Get product ID from the request body

  try {
    const product = await productModel.findById(productId); // Fetch the product from the database
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// Export controller functions
export { listProduct, addProduct, removeProduct, singleProduct };
