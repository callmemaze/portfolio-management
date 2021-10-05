import mongoose from "mongoose";
import stockSchema from "../model.js";

export const getName = async (req, res) => {
  try {
    const name = await stockSchema.find();
    res.status(200).json(name);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
