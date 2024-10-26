const validate = (Schema) => async (req, res, next) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message;
    // const extraDetails =
    //   err.errors && err.errors[0]
    //     ? err.errors[0].message
    //     : "An unknown error occurred";

    const error = {
      status,
      message,
      extraDetails,
    };
    console.log(error);
    // res.status(400).json({ msg: message});
    next(error);
  }
};

module.exports = validate;
