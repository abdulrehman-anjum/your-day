import { Response, Request } from "express";
import User from "../models/user";
import { thisSession } from '../middlewares/startSession'
import generateUniqueString from "../utils/randomStringGenerator";
import Session from "../models/sessions";
// import { browserID } from "src/app";

const login = async (req: Request, res: Response)=>{

    //TEMP ADMIN
    if (req.body.username===process.env.AdminSecretKey){
        console.log(Number(process.env.AdminSecretKey))
        res.cookie('admincookie', Number(process.env.AdminSecretKey))
        res.render('message-to-user', {
            message: 
                `
                    Hello Admin
                `,
            btnHref: "/admin",
            btnText: "Do your Admin Things"
        })
    } else {
        // res.send(`User ${req.body.username} Save`)
        // res.cookie("username", req.body.username, {
        //     // maxAge: 5000,
        //     secure: true,
        //     httpOnly: true,
        //     sameSite: 'lax'
        // })
        // res.cookie("loggedOut", false, {
        //     // maxAge: 5000,
        //     secure: true,
        //     httpOnly: true,
        //     sameSite: 'lax'
        // })
        // console.log(generateUniqueString(20))
        const b_id = thisSession[0]._id
        console.log("this sesson with B-id", thisSession, b_id)
        // const existingUser = await User.findOne({sessions: { $in: [b_id]}}).lean()
        const existingUser = await User.findOne({username: req.body.username}).lean()
        console.log("Existing user", existingUser)
        if (existingUser) {
            console.log("logged in ")
            // loginStatus = true
            await Session.updateOne({browserId: b_id}, {loginStatus: true})
            console.log("LoginStatus True")
        } else {    
            createUser()
        }

        async function createUser(){
            const p_id = generateUniqueString(20)
            const user = {
                username: req.body.username,
                type: "reciever", //determine by whether the user visited with a personal_id that exist in our db in the url already, 
                            //then its a reciever, otherwise giver
                            //know this how???? find a way
                personal_id: p_id,
                sessions: [b_id] 
            }
            const newUser = new User(user)
            await newUser.save()
            console.log("new user SAVED", newUser)
        }
       
        const userCookieName = req.body.username
        res.render('message-to-user', 
            {
                message: 
                    `
                        Welcome ${userCookieName}
                    `,
                btnHref: "/quiz",
                btnText: "Prove Your Identity"
            })

    }


}

export default login