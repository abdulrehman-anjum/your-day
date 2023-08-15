import {answers} from '../controllers/getAnswer'
import Question from '../models/question';
import Answer from '../types/answer';
import { fetchedQuestions } from '../utils/questions';

async function takeAnswer(option: number) {
    const questions = fetchedQuestions

    console.log(option)
    if (answers.length < questions.length) {

        let answer: Answer = {
            answer: Number(option),
            valid: false
        }
        answers.push(answer);
        console.log(answers.length, "answers length")
    }
    return answers
}

export default takeAnswer