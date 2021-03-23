// require mongoose
const mongoose = require("mongoose");

// create contact schema
// const (schema) = mongoose
const schema = mongoose.Schema;

const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: Number,
});
module.exports = Contact = mongoose.model("contact", contactSchema);
