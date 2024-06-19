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

async function update(req, res) {
  // Get the rule from the message body
  let rule = req.body.rule;
  console.log(rule);

  // add it to the Rules table
  try {
    let codingStandard = new CodingStandard({ rule });
    console.log("crated new CodingStandard object");
    await codingStandard.save();
    console.log("saved new CodingStandard object");
    res.status(201).json("Rules updated");
  } catch (err) {
    // respond Success/ Error
    console.error(err.message);
    res.status(500).send("Something went wrong! Rule could not be updated");
  }
}

async function remove(req, res) {}

module.exports = {
  getAll,
  update,
  remove,
};
