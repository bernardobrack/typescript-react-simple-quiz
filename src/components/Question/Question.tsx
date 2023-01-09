import QuestionOptions from "./QuestionOptions/QuestionOptions"
import "./Question.css";

interface IQuestionProps {
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    question: string
    reveal: boolean
}

export default function Question(props: IQuestionProps) {
    const {correctAnswer, incorrectAnswers, question, reveal} = props;
    return <section className="question-section">
        <h2>{question}</h2>
        <QuestionOptions
            reveal={reveal} 
            correctAnswer={correctAnswer}
            incorrectAnswers={incorrectAnswers}
        />
        <hr></hr>
    </section>
}