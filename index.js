import dotenv from 'dotenv';
import connectdb from './config/db.js';
import {app} from './app.js'
import {
    job,
    fetchDataImmediately,

}  from './jobs/cronJob.js'


dotenv.config({
    path:"./.env"
});

connectdb()
.then(() => {
    console.log("Connection Established Succesfully")
    job.start()
    // fetchDataImmediately() // Used to Validate the CronJob Functionality || Commented out Once ran
    console.log('Cron job started.');

    app.on("error",(error)=>{
        console.log("Error while Listening To Port",error)
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Connection Established Succesfully at ${process.env.PORT}`)
    })
})
.catch((error) =>{console.log("Connection Failed",error)})

