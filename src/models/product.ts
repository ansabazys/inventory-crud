import { Document, Schema, model, type InferSchemaType } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 0, min: 0 },
    stock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export type Product = InferSchemaType<typeof productSchema> & Document;

export const ProductModel = model<Product>("Product", productSchema);
