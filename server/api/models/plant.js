
import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({

}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  toJSON: {
    virtuals: true
  }
});

export default mongoose.model('Test', testSchema);
