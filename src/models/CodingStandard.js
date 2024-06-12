const mongoose = require("mongoose");

const collectionName = "CodingStandard";
const CodingStandardSchema = new mongoose.Schema(
  {
    rule: {
      type: String,
      required: true,
    },
  },
  { collection: collectionName }
);

module.exports = mongoose.model(collectionName, CodingStandardSchema);
