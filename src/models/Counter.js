import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});

CounterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const Counter = mongoose.model('Counter', CounterSchema);

const autoIncrementModelId = function(modelName, doc, next) {
  Counter.findByIdAndUpdate(
    modelName,
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
    function(error, counter) {
      if (error) return next(error);
      doc.index = counter.seq;
      next();
    }
  );
};

export default autoIncrementModelId;
