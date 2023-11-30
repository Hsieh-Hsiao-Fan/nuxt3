import mongoose from "mongoose";

export default async (_nitroApp) => {
  try {
    mongoose.set("strictQuery", true); // 嚴格模式
    await mongoose.connect("mongodb://127.0.0.1:9933/nuxt4");
    console.log("連接 MongoDB");
  } catch (e) {
    console.error("Error MongoDB =>", e);
  }
};
