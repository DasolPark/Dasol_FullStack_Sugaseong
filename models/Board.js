import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  content: {
    type: String,
    required: 'Content is required'
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

const model = mongoose.model('Board', BoardSchema);

export default model;
