import User from "../models/user"
import { hashPassword } from "./bcryptConfig"

export default async function createUser(username: string, password: string){
    const hashedPassword = await hashPassword(password)
    const userdata = { 
        username: username,
        password: hashedPassword
    }
    const newUser = new User(userdata)
    const user = await newUser.save()
    return user
}