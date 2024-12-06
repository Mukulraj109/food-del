import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login user

const loginUser = async (req,res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!validator.isEmail(email)) {
            return res.json({ success:false,message: "Invalid email" });
        }
        if (!user) {
            return res.json({ success:false,message: "User not found" });
        } 
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success:false,message: "Invalid credentials" });
        }

    const token = createToken(user._id);

    res.json({ success:true,token });

    } catch (error) {
        console.log(error);
        res.json({ success:false, message: "Server Error" });
    }
};

const createToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

//register user
const registerUser = async (req, res) => {
        const {name, email, password} = req.body;
        try {
            // checking is user already exist
            const exists = await userModel.findOne({email});
            if(exists) {
                return res.json({success:false,message: 'Email already exists'});
            }
            if(!validator.isEmail(email)){
                return res.json({success:false,message: "Please enter a valid email"});
            }
            if(password.length<8){
                return res.json({success:false,message: "Password should be at least 8 characters long"});
            }
            // hashing password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({name,email,password: hashedPassword});
        const user   =  await newUser.save();
        const token =   createToken(user._id);
        res.json({success:true,token});
        } catch (error) {
            console.log(error);
            res.json({success:false, message: 'Server Error'});
        }
}

export { loginUser, registerUser };