import objectsModel from "@/server/models/objects.model";

export default defineEventHandler(async (event) => {
  const people = await objectsModel.find();
  return people;
});
