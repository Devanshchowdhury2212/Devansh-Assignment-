import mongoose,{ model, Schema } from "mongoose";

const cryptoSchema = new Schema(
    {
       coin:{
        type:String,
        required:true
       },
       price:{
        type:Number,
        required:true
       },
       marketCap:{
        type:Number,
        required:true
       },
       change24h:{
        type:Number,
        required:true
       },

    },
    {timestamps:true}
)

export const Crypto = model("Crypto",cryptoSchema)// Lowercase aur 's added by mongo db