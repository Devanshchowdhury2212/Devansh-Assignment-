import cron from 'node-cron';
import fetchCryptoData from '../utils/fetchCryptoData.js' 

// Run the job every 2 hours
const job = cron.schedule('0 */2 * * *', () => {
    console.log('Fetching crypto data...');
    fetchCryptoData();
  });

  // Immediately call the function to fetch data upon server startup
const fetchDataImmediately = async () => {
    console.log('Fetching crypto data immediately...');
    await fetchCryptoData();
  };

export {
    job,
    fetchDataImmediately,
}
