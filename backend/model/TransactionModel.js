import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    sold: {
      type: Boolean,
      enum: [true, false],
    },
    dateOfSale: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
