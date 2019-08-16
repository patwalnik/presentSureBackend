import qr from 'qrcode'
import 'babel-polyfill'


const generate = async (req,res,next) => {
    const text = Math.random().toString();
    try {
        await qr.toDataURL(text, {errorCorrectionLevel : 'H'}, (err, result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send(result)
            }
        })
      } catch (err) {
        console.error(err)
      }
}


const qrHelperFunction = {
    generate
}

export default qrHelperFunction