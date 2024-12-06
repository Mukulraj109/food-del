import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mukulraj756:mukulraj123@cluster0.ejo29.mongodb.net/food-del')
    .then(()=>console.log('db connection established'));
}
