const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/contactdb")
.then(() => 
{
    console.log("mongodb connected");
}) .catch(() => {
    console.log('error');
})

const contactSchema = new mongoose.Schema ({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    number: {
        type:String,
        required: true
    },
    message: {
        type:String,
        required: true
    }
})

const collection = new mongoose.model('contactdb', contactSchema)




















data = [
    {
    name: "Lokesh",
    email: "lokesh@gmail.com",
    number: "123456789",
    message: "wow"
    },

    {
    name: "lokesh",
    email: "lokesh@gmail.com",
    number: "123456789",
    message: "Nice"
    },

    {
    name: "sai",
    email: "sai@gmail.com",
    number: "123456789",
    message: "good"
    },
    


]


collection.insertMany(data)