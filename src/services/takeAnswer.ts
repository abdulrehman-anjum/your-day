import {answers} from '../controllers/mainQuiz'
import Answer from '../types/answer';
import { questions } from '../utils/questions';

function takeAnswer(option: string): Answer[] {
    console.log(option)
    if (answers.length < questions.length) {
        let answer: Answer = {
            answer: option,
            valid: false
        }
        answers.push(answer);
    }
    return answers
}

export default takeAnswer