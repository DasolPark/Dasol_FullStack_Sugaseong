import mongoose from 'mongoose';
import Counter from './Counter';

const date = new Date();

const BoardSchema = new mongoose.Schema(
  {
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
  const doc = this;

  Counter.findByIdAndUpdate(
    { _id: 'boardIndex' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )
    .then(function(counter) {
      doc.index = counter.seq;
      next();
    })
    .catch(function(error) {
      console.error(`counter error: ${error}`);
      throw error;
    });
});

const model = mongoose.model('Board', BoardSchema);

export default model;
