import { useEffect, useState } from "react";
import { IResponse } from "../pages/QuizPage";

export default function useFetch(): [IResponse | null, React.Dispatch<React.SetStateAction<IResponse | null>>] {
    const [data, setData] = useState<IResponse | null>(null);
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
        .then(response => response.json())
        .then(data => setData(data));
    }, [])
    return [data, setData];
    
    
}

