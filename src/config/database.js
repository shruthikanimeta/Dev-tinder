const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect('mongodb+srv://shruthikanimeta031_db_user:Shruthi%401630@namastenode.pw9jgum.mongodb.net/?appName=NamasteNode/devTinder')
}

module.exports = {connectDB}