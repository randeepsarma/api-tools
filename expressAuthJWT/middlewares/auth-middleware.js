import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

let checkUserAuth = async(req,res,next)=>{
    let token 
    const {authorization} = req.headers
   // console.log('authorization:'+authorization)
    if(authorization && authorization.startsWith('Bearer')){
        try {
            //Get Token from header
            token=authorization.split(' ')[1]
           // console.log("Token:",token)


            //Verify Token
            const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log(userID)
            
            
            //Fetch  user data from Token through database excluding the password
            req.user = await UserModel.findById(userID).select('-password')
            console.log(req.user)
            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({"status":"failed","message":"Unauthorized User"})
        }
    }
    if(!token){
        res.status(401).send({"status":"failed","message":"Unauthorized User , No Token"}) 
    }
}
export default checkUserAuth
