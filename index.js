import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import qr from 'qrcode'

import indexV1 from './server/routes/index'
import configHolder from './config/config'

const app =  express();


mongoose.connect(configHolder.mongodb.url,{useNewUrlParser:true},(err)=>{
    console.log('data error ', err);
    console.log('database connected')
 })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


app.options('*', cors());
app.use(cors({ origin : 'http://localhost:3000'}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    res.header('Access-Control-Max-Age', '1000');
    next();
})

app.use('/api', indexV1);

app.listen(configHolder.httpPort);
