// import {quotes,users} from './fakedb.js'
// import {randomBytes} from 'crypto'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = "abcdenghijklmnopqrstuvw2xyz1ABCJLFRNEKLMNWEQRS";


const User  = mongoose.model("qutUser")
const Quote = mongoose.model("Quote")

const resolvers = {
    Query:{
        users:async () => await User.find({}),
        user:async (_,{_id})=> await User.findOne({_id}),
        quotes:async ()=>await Quote.find({}).populate("by","_id firstName"),
        iquote:async (_,{by})=> await Quote.find({by}),
        myprofile:async (_,args,{userId})=>{
            if(!userId) throw new Error("You must be logged in")
            return await User.findOne({_id:userId})
           }

     },
     User:{
         quotes:async (ur)=> await Quote.find({by:ur._id})
     },
    Mutation:{
        signupUser:async (_,{userNew})=>{
          const user = await User.findOne({email:userNew.email})
          if(user){
              throw new Error("User already exists with that email")
          }
         const hashedPassword =  await bcrypt.hash(userNew.password,12)

        const newUser =  new User({
             ...userNew,
             password:hashedPassword
         })
        return await newUser.save()
        },

        signinUser:async (_,{userSignin})=>{
         const user = await User.findOne({email:userSignin.email})
         if(!user){
             throw new Error("User dosent exists with that email")
         }
         const doMatch =await bcrypt.compare(userSignin.password,user.password)
         if(!doMatch){
             throw new Error("email or password in invalid")
         }
         const token = jwt.sign({userId:user._id},JWT_SECRET)
         return {token}
        },
        createQuote:async (_,{name},{userId})=>{
           if(!userId) throw new Error("You must be logged in")
           const newQuote = new Quote({
               name,
               by:userId
           })
           await newQuote.save()
           return "Quote saved successfully"
        },
        deleteUser: async (_, { userDelete }) => {
            // Find the user by ID and remove it
            const deletedUser = await User.findByIdAndRemove(userDelete._id);
        
            if (!deletedUser) {
                throw new Error("User not found");
            }
        
            return deletedUser;
        },

       // Mutation resolver
     updateUser: async (_, { userUpdate }) => {
    // Find the user by ID and update it
    const updatedUser = await User.findByIdAndUpdate(
        userUpdate._id,
        { $set: userUpdate }, // Use $set to update specific fields
        { new: true } // Return the updated user
    );

    if (!updatedUser) {
        throw new Error("User not found");
    }

    return updatedUser;
   }
       

    }

    
}

export default resolvers

     
