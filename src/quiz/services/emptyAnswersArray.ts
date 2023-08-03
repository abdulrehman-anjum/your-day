import { answers } from "../controllers/getAnswer";

export function emptyAnswersArray(){
    answers.splice(0, answers.length)
}