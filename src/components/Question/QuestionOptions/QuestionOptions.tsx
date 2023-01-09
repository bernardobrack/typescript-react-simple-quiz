import { useMemo, useState } from "react"
import randomizeArrays from "../../../utils/randomizeArrays"
import SmallButton from "../../SmallButton/SmallButton";
import "./QuestionOptions.css";

interface IQuestionOptionsProps {
    correctAnswer: string,
    incorrectAnswers: Array<string>,
    reveal: boolean
}

export default function QuestionOptions(props: IQuestionOptionsProps) {

    const questionOptions = useMemo<Array<string>>(() => {

        return randomizeArrays([props.correctAnswer], props.incorrectAnswers)
    }, [props.correctAnswer, props.incorrectAnswers])

    const [isSelected, setIsSelected] = useState<Array<boolean>>(() => questionOptions.map(item => false));

    function handleButtonClick(id: number) {
        if(props.reveal) return;
        setIsSelected(prev => {
            return prev.map((prev, indice) => {
                if (id === indice) return !prev;
                return false;
            })
        })

    }
    return <div className="question-options-div">
        {questionOptions?.map((option, index) => <SmallButton correct={option === props.correctAnswer} reveal={props.reveal} isSelected={isSelected[index]} key={option} onClick={() => handleButtonClick(index)}>{option}</SmallButton>)}
    </div>
}