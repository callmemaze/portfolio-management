import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  price: Number,
  date: String,
});

const orderCollection = mongoose.model("orderCollection", orderSchema);

export default orderCollection;
