import mongoose from'mongoose';
import MONGO_URI from './config/envs.js'
import filmSchema from './schemas/filmSchema.js'
import planetSchema from './schemas/planetSchema.js'
import characterSchema from './schemas/characterSchema.js'
const conn=mongoose.createConnection(MONGO_URI)
export default {
 Character:conn.model('Character',characterSchema),
  Film:conn.model('Film',filmSchema),
  Planet: conn.model('Planet',planetSchema)
}