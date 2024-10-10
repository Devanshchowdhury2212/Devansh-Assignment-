import mongoose from "mongoose";
import { Crypto } from "../models/crypto.models.js";

const getLatestData = async(req,res) =>{
    const {coin} = req.query
    const validCoins = ['bitcoin', 'ethereum', 'matic-network'];
    if (!validCoins.includes(coin)) {
        return res.status(400).json({ error: "Invalid coin requested." });
    }
    let cryptoData
    try {
        cryptoData = await Crypto.findOne({coin})
        .select('coin price marketCap change24h -_id')
        .sort({createdAt:-1})
    } catch (error) {
        return res.status(500).json({ error: "Error Occured while Data Retrieval" }); 
    }
        
    return res.status(200).json({'data':cryptoData})
}

export {getLatestData}