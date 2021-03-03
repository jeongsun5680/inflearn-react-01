//Schema는 내가 알고 있는 그 스키마
//Model은 Schema를 감싸는 것
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//trim: true는 공백을 제거해준다는 뜻

const User = mongoose.model('User', userSchema)

module.exports = {User}