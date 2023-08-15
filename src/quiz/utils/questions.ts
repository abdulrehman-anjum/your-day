import Question from "../types/question";

export let fetchedQuestions: Question[] = [];

export function setQuizQuestions(questions: any){
  fetchedQuestions = questions
}