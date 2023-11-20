const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User must type name"],
        unique: true,
    },
    token:{
        type:String,
    },
    //User 온라인 오프라인 확인여부 확인용
    online:{
        type:Boolean,
        default:false,
    },
});
module.exports = mongoose.model("User",userSchema);