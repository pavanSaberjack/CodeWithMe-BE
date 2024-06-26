const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const collectionName = "User";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: collectionName }
);

// Pre-save middleware to hash password before saving the user document
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model(collectionName, UserSchema);
