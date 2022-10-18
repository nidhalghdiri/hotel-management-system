const { validateEmail, validateUsername } = require("../helpers/validation");
const { User, validateUser } = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
exports.register = async (req, res) => {
  try {
    // Validate Data Structure
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { first_name, last_name, email, password, gender } = req.body;
    // Validate Existance of Email
    const check = await User.findOne({ email }).exec();
    if (check) {
      return res
        .status(400)
        .send("This Email Already Exist, try diffrent email address");
    }

    // Crypt Passowrd
    const salt = await bcrypt.genSalt(10);
    const cryptedPassword = await bcrypt.hash(password, salt);

    let tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);
    // Save Data to Database
    const user = await new User({
      first_name,
      last_name,
      email,
      username: newUsername,
      password: cryptedPassword,
      gender,
    }).save();

    //Generate Token
    const token = generateToken({ id: user._id.toString() });

    // Send Success Response
    return res.header("x-auth-token", token).status(200).send({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username,
      gender: user.gender,
      token: token,
      message: "Register Success ! Please Activate your email.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send("This Email adress you entred is not connected to an account.");
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).send("Invalid Credentials. Please try again.");
    }

    const token = generateToken({ id: user._id.toString() });

    res.header("x-auth-token", token).send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      message: "Login Success.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
