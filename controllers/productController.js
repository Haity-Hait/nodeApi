import { Product } from "../models/productModel.js";

export const createProduct = async (req, res) => {
    const { title, price, description, category, image, cameInStock, countInStock, shippingFrom, shippingFee, ratings } = req.body;

    try {
        const newProduct = new Product({
            title,
            price,
            description,
            category,
            image,
            countInStock,
            shippingFrom,
            shippingFee,
            ratings
        })
        newProduct.save()
        .then(() => {
            res.status(201).json({ message: "Product Created Successfully." })
        })
    } catch (error) {
        res.status(409).json({ message: error })
    }

}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}