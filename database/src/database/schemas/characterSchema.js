import mongoose from 'mongoose';
const characterSchema= mongoose.Schema({
        "_id":String,
    "name": String,
    "height": String,
    "mass": String,
    "hair_color": String,
    "skin_color":String,
    "eye_color": String,
    "birth_year": String,
    "gender": {type:String},
    "homeworld": {type:String,
        ref:"Planet"},
    "films": [{type:String,ref:"Film"}]
})
characterSchema.statics.getAll= async function() {
return await this.find()
.populate("homeworld",["id", "name"])
.populate("films",["id", "title"])
}
characterSchema.statics.get= async function(_id) {
    return await this.findById(_id)
    .populate("homeworld",["id", "name"])
    .populate("films",["id", "title"])
    }

characterSchema.statics.insert= async function(character) {
        return await this.create(character)
           }
export default characterSchema

