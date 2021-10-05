import mongoose from "mongoose";
import stockSchema from "../model.js";
import orderCollection from "../orderModel.js";
export const getName = async (req, res) => {
  try {
    const name = await stockSchema.find();
    res.status(200).json(name);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  const order = req.body;
  console.log(order);
  const newOrder = new orderCollection(order);
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
