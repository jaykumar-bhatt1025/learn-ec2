const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.status(200).send('Hello from Jay');
})


app.listen(3000,()=>{
    console.log('App running on 3000.....');
})