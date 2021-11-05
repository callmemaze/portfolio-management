import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userID: String,
  userName: String,
  name: String,
  quantity: Number,
  price: Number,
});

const shareHolder = mongoose.model("shareHolder", orderSchema);

export default shareHolder;
