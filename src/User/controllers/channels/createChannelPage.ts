import { Request, Response } from "express";
import { currentUser } from "../../../Auth/middlewares/refreshThisUser";
import Quiz from "../../../quiz/models/quiz";
import { channelCreation, channelName } from "../../middlewares/sameUsernameChecker";
import Slide from "../../../slide/models/slide";


export default async function (req:Request, res:Response) {
    if (channelCreation && channelName!=""){
        const quizzes = await Quiz.find({quiz_creator: currentUser._id})
        const slides = await Slide.find({slide_creator: currentUser._id})
        res.render('channel-select-quiz', {quizzes: quizzes, slides: slides, channelName: channelName})
    } else if (channelName!="" && !channelCreation){
        res.render('create-channel', {message: "already exists, try another"})
    } else {
        res.render('create-channel', {message: ""})
    }
}