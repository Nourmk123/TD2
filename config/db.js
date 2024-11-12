const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.liufw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Established a connection to the database");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
