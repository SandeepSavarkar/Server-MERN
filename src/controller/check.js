export const check = (req, res) => {
  try {
    return res.json({
      message: "success",
    });
  } catch (error) {
    return serverError(error, res);
  }
};
