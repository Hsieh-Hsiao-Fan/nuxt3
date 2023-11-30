import mongoose from "mongoose";

// objects schema
const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const objects = mongoose.model("nuxt4", schema, "objects");

export default objects;
