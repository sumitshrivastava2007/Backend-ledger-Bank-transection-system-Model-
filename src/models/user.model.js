const mongoose = require("mongoose"); // use for connecting database to server
const bcrypt = require("bcryptjs"); // use for hashing password

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required to create user"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "invalid email address"],
      unique: [true, "email already exist"],
    },
    name: {
      type: String,
      required: [true, "Required to create a account"],
    },
    password: {
      type: String,
      required: [true, "Required to create a account"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return ;
  }

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  return ;
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
