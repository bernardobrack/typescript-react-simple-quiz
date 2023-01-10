import { useState } from "react";
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
    const [reveal, setReveal] = useState<boolean>(false);
    const [data, setData] = useFetch();
    function handleResetClick() {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
        .then(response => response.json())
        .then(data => {
            setData(data);
            setReveal(false);
        })
    }
    return <div className="quiz-page-div">
        <section className="quiz-page-content">
        {data?.response_code === 0 && <>
            {data?.results.map((question_data, index) => {
            return <Question
                reveal={reveal}
                key={question_data.question} 
                correctAnswer={question_data.correct_answer}
                incorrectAnswers={question_data.incorrect_answers}
                question={question_data.question}
                />
        })}
        {reveal 
        ? <BigButton onClick={handleResetClick}>Restart Quiz</BigButton>
        : <BigButton onClick={() => setReveal(true)}>Check Answers</BigButton>
        }
        </>}
        </section>
    </div> 
}