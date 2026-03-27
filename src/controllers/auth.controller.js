const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken") //require to login user 

async function userRegisterController(req,res){
    const{email,password,name} = req.body

    const isExists = await userModel.findOne({
        email : email
    })

    if(isExists){
        return res.status(422).json({
            massage : "user already exist with email.",
            status : "failed"
        })
    }

    const user = await userModel.create({
        email,password,name
    })

    const token = jwt.sign({userId : user._id},process.env.JWT_SECRET,{expiresIn:"3d"})

    res.cookie("token",token)

    res.status(201).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        },
        token
    })
}

async function userLoginController(req,res){
    const {email,password} = req.body

    const user = await userModel.findOne({email}).select("+password")

    if(!user){
        return res.status(401).json({
            massage:"Email or password is Invalid"
        })
    }

    const isValidpassword = await user.comparePassword(password)

    if(!isValidpassword){
        return res.status(401).json({
            massage : "Email or password is Invalid"
        })
    }

    const token = jwt.sign({userId : user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(200).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        },
        token
    })

}

module.exports = {
    userRegisterController,
    userLoginController
}