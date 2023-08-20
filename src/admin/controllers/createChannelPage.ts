import { Request, Response } from "express";
import { currentUser } from "../../Auth/middlewares/refreshThisUser";
import Quiz from "../../quiz/models/quiz";
import { channelCreation, channelName } from "../middlewares/sameUsernameChecker";


export default async function (req:Request, res:Response) {
    if (channelCreation && channelName){
        const quizzes = await Quiz.find({quiz_creator: currentUser._id})
        res.render('channel-select-quiz', {quizzes: quizzes, channelName: channelName})
    } else if (channelName && !channelCreation){
        res.render('create-channel', {message: "already exists, try another"})
    } else {
        res.render('create-channel', {message: ""})
    }
}