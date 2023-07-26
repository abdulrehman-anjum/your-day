import Answer from "../types/answer"
import QuestionType from "../types/question";

async function results(userAnswers: Answer[], questions: QuestionType[]){
    let i = 0
    console.log(userAnswers, "calcResult");
    userAnswers.forEach(answer=>{
        if (answer.answer === questions[i].correct){
            answer.valid = true
        }
        answer.answer = questions[i].options[Number(answer.answer)]
        console.log(questions[i].options[questions[i].correct])
        i=i+1      
    })
}

export default results
