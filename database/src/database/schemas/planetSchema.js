import mongoose from 'mongoose'
const planetSchema= mongoose.Schema({
    
        "_id": String,
        "name": String,
        "rotation_period": String,
        "orbital_period": String,
        "diameter": Number,
        "climate":Number,
        "gravity": Number,
        "terrain": Number,
        "surface_water": Number,
        "res_idents": [{type:Number,ref:"Character"}],
        "films": [{type:String,ref:"Film"}]
      

})

planetSchema.statics.getAll= async function() {
    return await this.find()
   .populate("res_idents",["_id", "name"])
    .populate( "films",["_id", "title"])
    }
    
    planetSchema.statics.get= async function(_id) {
        return await this.findById(_id)
        .populate("res_idents",["_id", "name"])
        .populate( "films",["_id", "title"])
        }

        planetSchema.statics.insert= async function(planet) {
            return await this.create(planet)
               }

export default planetSchema