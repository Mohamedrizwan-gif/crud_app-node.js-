const mongoose = require('mongoose');

url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jio5i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch (err) {
        console.log('err',err);
        process.exit(1);
    }
}

module.exports = connectDB;