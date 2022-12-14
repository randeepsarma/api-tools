import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'
import transporter from '../config/emailConfig.js'

class UserController {
//Public route - register     
    static userRegistration = async (req, res) => {
        const { name, email, password, password_confirmation, tc } = req.body
        const user = await UserModel.findOne({ email: email })
        //If user already registered
        if (user) {
            res.send({ "status": "failed", "message": "Email already exists" })
        } else {
            if (name && email && password && password_confirmation && tc) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const doc = new UserModel({
                            name: name,
                            email: email,
                            password: hashPassword,
                            tc: tc
                        })
                        await doc.save()
                        const saved_user = await UserModel.findOne({ email: email })
                        //Generate JWT Token
                        const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })

                        res.status(201).send({ "status": "success", "message": "Registration successfully done", "token": token })

                    } catch (error) {
                        console.log(error)
                        res.send({ "status": "failed", "message": "Unable to register" })
                    }
                } else {
                    res.send({ "status": "failed", "message": "Password and Confirm Password does not match" })
                }
            } else {
                res.send({ "status": "failed", "message": "All fields are required" })
            }
        }
    }
//Public route - logging in
    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body
            if (email && password) {
                const user = await UserModel.findOne({ email: email })
                if (user) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if (user.email === email && isMatch) {
                        //Generate JWT Token
                        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })


                        res.send({ "status": "success", "message": "Login Success", "token": token })

                    } else {
                        res.send({ "status": "failed", "message": "Email or Password is not valid" })
                    }
                } else {
                    res.send({ "status": "failed", "message": "User does not exist" })

                }
            } else {
                res.send({ "status": "failed", "message": "All fields are required" })

            }


        } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Unable to Login" })

        }
    }
// private route - change user password on your own if you have not forgotten the password   
    static changeUserPassword = async (req, res) => {
        const { password, password_confirmation } = req.body
        if (password && password_confirmation) {
            if (password !== password_confirmation) {
                res.send({ "status": "failed", "message": "New Password and Confirm Password does not match" })

            } else {
                const salt = await bcrypt.genSalt(10)
                const newHashPassword = await bcrypt.hash(password, salt)
                console.log(req.user._id)

                await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } })

                res.send({ "status": "success", "message": "Password changed successfully" })

            }
        } else {
            res.send({ "status": "failed", "message": "All fields are required" })
        }
    }
// private route -  logging in a already registered user that has an unexpired token 
    static loggedUser = async (req, res) => {
        res.send({ "user": req.user })
    }

    static sendUserPasswordResetEmail = async (req, res) => {
        const { email } = req.body
        if (email) {
            //Finding use by email id from collection
            const user = await UserModel.findOne({ email: email })
            if (user) {
                const secret = user._id + process.env.JWT_SECRET_KEY

                const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
                const link = `http://127.0.0.1/api/user/reset/${user._id}/${token}`
                console.log(link)
                //Send Email
                let info = await transporter.sendMail({
                    from: process.env.EMAIL_FROM,
                    to: user.email,
                    subject: "Geek-Shop - Password Reset Link",
                    html: `<a href=${link}>Click Here</a> to reset your password`
                })
 


                res.send({ "status": "success", "message": "Password Reset Email Sent... Please Check Your Email"})

            } else {
                res.send({ "status": "failed", "message": "Email does not exists" })
            }
        } else {
            res.send({ "status": "failed", "message": "Email Field is Required" })
        }
    }
    static userPasswordReset = async (req, res) => {
        const {password , confirm_password}= req.body;
        const {id,token} = req.params;
        const user = await UserModel.findById(id);
        const secret = user._id +process.env.secret_key
        try {
           const {userID}= jwt.verify(token,secret);
           if(userID===id){
              if(password && confirm_password){
                if(password === confirm_password){
                    const salt = await bcrypt.genSalt(10);
                    const hashpassword = await bcrypt.hash(password,salt)
                    await UserModel.findByIdAndUpdate(userID,{password:hashpassword})
                    res.send({ 'status': 'Success', 'message': 'Password successfully updated' })  

                }
              }else {
                res.send({ 'status': 'failed', 'message': 'All fields required' })  
              }
           }else{
            res.send({ 'status': 'failed', 'message': 'Invalid userID' })  
           }


        } catch (error) {
            console.log(error)
            res.send({ 'status': 'failed', 'message': 'Invalid token' })  
        }
    }


}



export default UserController