const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB Connection is successfull"))
        .catch((error) => {
            console.log("Issue in DB Connection")
            console.error(error.message);

            //find out why we used it 
            process.exit(1);
        })
}

module.exports = dbConnect;