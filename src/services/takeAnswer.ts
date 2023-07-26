import {answers} from '../controllers/getAnswer'
import Question from '../models/question';
import Answer from '../types/answer';

async function takeAnswer(option: number) {
    const questions = await Question.find().lean()

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