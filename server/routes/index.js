import qrcode from './qrcode.route'
import express from 'express';
const router = express.Router();

router.use('/qrcode', qrcode)

export default router;