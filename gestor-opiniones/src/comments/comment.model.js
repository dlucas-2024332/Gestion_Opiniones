import { Schema, model } from 'mongoose';

const CommentSchema = Schema({
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Publication', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default model('Comment', CommentSchema);