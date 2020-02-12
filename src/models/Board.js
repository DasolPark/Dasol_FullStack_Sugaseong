import mongoose from 'mongoose';
import autoIncrementModelId from './Counter';

const date = new Date();

const BoardSchema = new mongoose.Schema(
  {
    index: {
      type: Number,
      unique: true,
      min: 1
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
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

BoardSchema.pre('save', function(next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelId('boards', this, next);
});

const model = mongoose.model('Board', BoardSchema);

export default model;
