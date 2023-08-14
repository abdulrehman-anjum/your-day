import User from "../models/user"
import generateUniqueString from "./randomStringGenerator"

export default async function createUser(username: string){
    const p_id = generateUniqueString(20)
    const userdata = { 
        username: username, // type:  //!find a way
        type: "reciever", //determine by whether the user visited with a personal_id that exist in our db in the url already, 
        personal_id: p_id
    }
    const newUser = new User(userdata)
    const user = await newUser.save()
    return user
}