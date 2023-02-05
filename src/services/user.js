import mongoose from "mongoose";
import { getUsersData } from "../apis/index.js";
import { serverError } from "../helpers/errors.js";
import { formatterArray } from "../helpers/formatter.js";
import user from "../models/user.js";

export const storeUserData = async (res) => {
  try {
    const response = await getUsersData();
    const users = formatterArray(response?.data);
    const userData = await user.insertMany(users);
    return userData;
  } catch (error) {
    console.log("error: ", error);
    return serverError(error, res);
  }
};

export const storeUser = async (req, res) => {
  try {
    const { email, first_name, last_name } = req.body;
    const userData = new user({ email, first_name, last_name });
    await userData.save();
    
    return res.status(201).json({
        message: "user created",
        data: userData
    })

  } catch (error) {
    console.log("error: ", error);
    return serverError(error, res);
  }
};

export const userList = async () => {
  try {
    const userData = await user.find({});
    return userData;
  } catch (error) {
    return serverError(error, res);
  }
};
