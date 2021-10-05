import mongoose from "mongoose";
import orderCollection from "../orderModel.js";

export const createOrder = async (req, res) => {
  const order = req.body;
  console.log(order);
  try {
    const newOrder = new orderCollection(order);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await orderCollection.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
