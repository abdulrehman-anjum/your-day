import { Response, Request } from "express";
import User from "../models/user";
import generateUniqueString from "../utils/randomStringGenerator";
import Session from "../models/sessions";
export let thisUser: any

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
        // const b_id = "browserId"
        // console.log("this sesson with B-id", browserId, b_id)
        // const existingUser = await User.findOne({sessions: { $in: [b_id]}}).lean()

        const username = req.body.username
        const b_id = req.cookies.b_id
    

        const existingUser = await User.findOne({username: username}).lean()
        console.log("Existing user", existingUser)
        


        if (existingUser) {
            console.log("logged in ")
            thisUser = existingUser
            console.log("LoginStatus True", thisUser)
        } else {    
            await createUser()
        } 

        console.log(thisUser)
        await Session.updateOne({browserId: b_id}, {loggedUser: thisUser._id})


        async function createUser(){
            const p_id = generateUniqueString(20)
            const user = {
                username: username,
                type: "reciever", //determine by whether the user visited with a personal_id that exist in our db in the url already, 
                            //then its a reciever, otherwise giver
                            //know this how???? find a way
                personal_id: p_id,
                 
            }
            const newUser = new User(user)
            thisUser = await newUser.save()
            console.log("new user SAVED", thisUser)
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