import Answer from "../types/answer"

function results(userAnswers: Answer[], answerKey: string[]){
    let i = 0
console.log(userAnswers, "efoiwehro");

    userAnswers.forEach(answer=>{
        if (answer.answer === answerKey[i]){answer.valid = true}
        i=i+1      
    })
}

export default results