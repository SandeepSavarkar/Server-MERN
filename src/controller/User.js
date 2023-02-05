import { serverError } from "../helpers/errors.js";
import { storeUser, storeUserData, userList } from "../services/user.js";

export const getUsers = async (req, res) => {
  try {
    const responseData = await userList(res);
    return res.json({
      message: "Users List",
      data: responseData,
    });
  } catch (error) {
    return serverError(error, res);
  }
};

export const loadUsers = async (req, res) => {
  try {
    const responseData = await storeUserData(res);
    return res.json({
      message: "User data Stored",
      data: responseData,
    });
  } catch (error) {
    return serverError(error, res);
  }
};

export const postUser = async (req, res) => {
  try {
    const responseData = await storeUser(req, res);
    return res.json({
      message: "User Created",
      data: responseData,
    });
  } catch (error) {
    return serverError(error, res);
  }
};
