const express = require('express')
const app = express()
const port = 5000

//user:jeongsun, pw:jeongsun123
//처음에 아래 connect에서 에러가 났는데, 이는 mongodb에서 user를 등록할 때 내 pc의 ip를 등록해주지 않았기 때문
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jeongsun:jeongsun123@cluster0.9exer.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})