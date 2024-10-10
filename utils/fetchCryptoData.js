import axios from "axios";
import { Crypto } from '../models/crypto.models.js'

async function fetchCryptoData (){
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',  // Query parameter for the currency (USD)
          ids: 'bitcoin,ethereum,matic-network',  // Query parameter for the coin IDs
          include_24hr_change:true,
        }
      });

    try {
        for (const item of response.data){
            const newItem = Crypto.create({
                coin:item.id,
                price:item.current_price,
                marketCap:item.market_cap,
                change24h:item.price_change_24h
            })
        }    
    } catch (error) {
        console.log(error,"Data Insertion Failed")
        
    }

}

export default fetchCryptoData
