import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    email: {
        type: String,
        required: [true, 'Please add name'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add password']
    }
}, {
    timestamps: true,
})

export default mongoose.model('User', userSchema)