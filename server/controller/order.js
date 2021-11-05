import mongoose from "mongoose";
import orderCollection from "../orderModel.js";

export const createOrder = async (req, res) => {
  const order = req.body;
  try {
    const newOrder = new orderCollection({ ...order, userID: req.userId });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await orderCollection.find({ userID: req.userId });
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
