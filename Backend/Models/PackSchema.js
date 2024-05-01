const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  services : [{
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  }],
  price: { type: Number, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date }
},
{timestamps: true}
);

const Pack = mongoose.model('Pack', PackSchema);

module.exports = Pack;