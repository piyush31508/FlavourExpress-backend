import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: { type: Number, max: [50, 'maximum discount can be 50'], required: true },
    rating: { type: Number, min: [0, 'minimum rating can be 0'], max: [5, 'maximum rating can be 5'], default: 0 },
    category: { type: String, required: false },
    thumbnail: { 
        type: String, 
        validate: { 
          validator: v => /^(https?:\/\/[^\s]+)$/i.test(v), 
          message: 'Invalid URL format' 
        }
      },
      images: [{ 
        type: String, 
        validate: { 
          validator: v => /^(https?:\/\/[^\s]+)$/i.test(v), 
          message: 'Invalid URL format' 
        } 
      }],
      
});

export const Product = mongoose.model("Product", productSchema);