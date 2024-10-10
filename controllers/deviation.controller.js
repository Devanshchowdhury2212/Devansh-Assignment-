import mongoose from "mongoose";
import { Crypto } from "../models/crypto.models.js";

const getStandardDeviation = async(req,res) =>{
    const {coin} = req.query
    const validCoins = ['bitcoin', 'ethereum', 'matic-network'];
    if (!validCoins.includes(coin)) {
        return res.status(400).json({ error: "Invalid coin requested." });
    }
    let cryptoData
    try {
        cryptoData = await Crypto.aggregate([
            {$match:{coin}},
            {$group:{
                _id:null,
                deviation:{$stdDevPop:"$price"},
                // count:{$sum:1}
            }},
            {$project:{
                _id:0
            }}
        ])
    } catch (error) {
        return res.status(500).json({ error: "Error Occured while Data Retrieval" }); 
    }
    
    if (cryptoData.length >0){
        return res.status(200).json(cryptoData[0])
    }
    else{
        return res.status(200).json({"message":`No data found for coin: ${coin}`})
    }
    
}
export {
    getStandardDeviation
}