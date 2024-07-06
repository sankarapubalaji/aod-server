const mongoose = require('mongoose');

module.exports = () => {
    const conn = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
try {
    mongoose.connect(process.env.DB, conn);
    console.log("Connected to Submarine DataBase successfully");
} catch (error) {
    console.log(error);
    console.log("Unable to connect wuth Submarine DateBase");
}
};