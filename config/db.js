import mongoose from "mongoose";

//create mongoose
const mongoDbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO);
    console.log("mongoDb Connected SuccessFull");
  } catch (error) {
    console.log(error.message);
  }
};

//export
export default mongoDbConnect;
