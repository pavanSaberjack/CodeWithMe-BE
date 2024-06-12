const CodingStandard = require("../../models/CodingStandard");
const User = require("../../models/CodingStandard");

async function getAll(req, res) {
  try {
    let rules = await CodingStandard.find();
    if (!rules) return res.status(400).json({ msg: "Something went wrong" });
    res.json({ rules });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

async function update(req, res) {}

async function remove(req, res) {}

module.exports = {
  getAll,
  update,
  remove,
};
