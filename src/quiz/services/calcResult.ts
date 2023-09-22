import Answer from "../types/answer"
import QuestionType from "../types/question";
export let wrongCounter: number = -1

async function results(userAnswers: Answer[], questions: QuestionType[]){
    if (userAnswers.length > 0){
        wrongCounter = 0
        let i = 0
        console.log(userAnswers, "calcResult");
        userAnswers.forEach(answer=>{
            if (answer.answer === questions[i].correct){
                answer.valid = true
            } else {
                wrongCounter = wrongCounter + 1
            }
            answer.answer = questions[i].options[Number(answer.answer)] //turning the number into a value (correct option string)
            i=i+1      
        });
    }
    
}

export default results
