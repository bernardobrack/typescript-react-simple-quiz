import { useContext, useState } from "react";
import { AppContext } from "../components/AppContext/AppProvider";
import BigButton from "../components/BigButton/BigButton";
import Question from "../components/Question/Question";
import useFetch from "../hooks/useFetch"
import "./QuizPage.css";

export interface IQuestionResponse {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: Array<string>,
    question: string
    type: string

}

export interface IResponse {
    response_code: number,
    results: Array<IQuestionResponse>
}

export default function QuizPage() {
    const value = useContext(AppContext);
    const [reveal, setReveal] = useState<boolean>(false);
    const data: IResponse | null = useFetch();
    return <div className="quiz-page-div">
        <section className="quiz-page-content">
        {data?.response_code === 0 && data?.results.map((question_data, index) => {
            return <Question
                reveal={reveal}
                key={question_data.question} 
                correctAnswer={question_data.correct_answer}
                incorrectAnswers={question_data.incorrect_answers}
                question={question_data.question}
                />
        })}
        <BigButton onClick={() => setReveal(true)}>Check Answers</BigButton>
        </section>
    </div> 
}