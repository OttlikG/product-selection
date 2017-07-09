
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  category: String,
  product_name: String,
  location: String
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

export default mongoose.model('Product', productSchema);
