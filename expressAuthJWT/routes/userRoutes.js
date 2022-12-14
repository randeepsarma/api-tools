import express from 'express'
import UserController from '../controllers/userController.js'
import checkUserAuth from '../middlewares/auth-middleware.js'
const router = express.Router()
//Run middleware for bearer token authentication
// Route Level Middelware - To protect route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)



//Public routes
router.post('/register',UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/send-reset-password-email',UserController.sendUserPasswordResetEmail)

//Protected route
router.post('/changepassword',UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)
router.post('/reset-password/:id/:token',UserController.userPasswordReset)


export default router
