import express from 'express'
import qrHelperFunction from '../controller/qrcode.controller'
const qrcode = express.Router();

qrcode.get('/test', qrHelperFunction.generate)

export default qrcode;