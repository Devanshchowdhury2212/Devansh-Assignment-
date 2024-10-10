import mongoose from "mongoose";
// console.log("db index 0 ",process.env.MONGODB_URL)

const connectdb = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        // console.log("db index 1",process.env.MONGODB_URL)

        console.log(`Mongo DB connected @ ${connectionInstance.connection.host}`)        
    }catch(error){
        console.log("MONGODB connection FAILED",error);
        process.exit(1)
    }
}

export default connectdb