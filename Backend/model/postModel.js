import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'input required']
    }
}, {
    timestamps: true,
})

export default mongoose.model('Post', postSchema);

