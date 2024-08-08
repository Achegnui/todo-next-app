import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://achegnuijuven:Juvensius24@cluster0.dc6u3.mongodb.net/todo-app"
  );
  console.log("DB Connected");
};
