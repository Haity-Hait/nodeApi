import mongoose, { Schema, SchemaType } from "mongoose"

const productSchema = Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    cameInStock: {
        type: Date,
        default: Date.now
    },
    countInStock: {
        type: Number,
        required: true
    },
    shippingFrom: {
        type: String,
        required: true
    },
    shippingFee: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
})

export const Product = mongoose.model("Product", productSchema)