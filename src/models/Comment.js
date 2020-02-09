import mongoose from 'mongoose';

const date = new Date();

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: 'Text is required'
    },
    createdAt: {
      type: String,
      default: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('Comment', CommentSchema);

export default model;
