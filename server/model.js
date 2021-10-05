import mongoose from "mongoose";

const stockSchema = mongoose.Schema({
  name: String,
});

const stockName = mongoose.model("stockName", stockSchema);

export default stockName;
