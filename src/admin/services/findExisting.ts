import mongoose from "mongoose"
import Channel from "../models/channel"



export default async function find(modelname: string, fieldname: string, userInput: string): Promise<boolean>{
    const Model = mongoose.models[`${modelname}`]
    console.log("findExisting",Model, "fefefefef")
    if(Model){

        const query: Record<string, any> = {} //CHATGPT //!investigate further
        query[fieldname] = userInput

        const foundusername = await Model.findOne(query)
        const found: boolean = await foundusername?true:false
        console.log("this is found ", found, foundusername)
        return found
    }
    return false
}




