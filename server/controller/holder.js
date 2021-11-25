import mongoose from "mongoose";
import shareHolder from "../shareHolderModel.js";

export const getShare = async (req, res) => {
  try {
    const share = await shareHolder.find({ userID: req.userId });
    const name = share.name;
    if (share.quantity < 1) {
      const deleteShare = await shareHolder.deleteOne({
        userID: req.userId,
        name,
      });
      console.log(deleteShare);
    }
    res.status(200).json(share);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createShare = async (req, res) => {
  const share = req.body;
  const name = share.name;
  const addShare = share.quantity;
  try {
    const shareExist = await shareHolder.findOne({ userID: req.userId, name });
    if (shareExist !== null) {
      if (share.type === "Buy") {
        const newShare = await shareHolder.updateOne(
          { userID: req.userId, name },
          {
            $inc: { quantity: +addShare },
          },
          {
            new: true,
          }
        );
        res.json(newShare);
      } else {
        if (share.type === "Sell") {
          if (shareExist.quantity < addShare) {
            res.status(400).json({ message: "You dont have enough shares" });
          } else {
            const newShare = await shareHolder.updateOne(
              { userID: req.userId, name },
              {
                $inc: { quantity: -addShare },
              },
              {
                new: true,
              }
            );
            res.json(newShare);
          }
        }
      }
    }
    if (shareExist === null) {
      if (share.type === "Buy") {
        const newShare = new shareHolder({ ...share, userID: req.userId });
        await newShare.save();
        res.status(200).json(newShare);
      } else {
        res.send({ message: `You don't have share of ${name}` });
      }
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
