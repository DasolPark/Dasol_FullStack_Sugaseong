import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { db } from '../db';

autoIncrement.initialize(db);

const date = new Date();

const BoardSchema = new mongoose.Schema({
  index: {
    type: Number,
    default: 0
  },
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
    type: String,
    default: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

BoardSchema.plugin(autoIncrement.plugin, 'Board');
const model = mongoose.model('Board', BoardSchema);

export default model;
