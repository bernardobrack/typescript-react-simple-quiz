import { createContext, useState } from "react";
import React from "react";


interface IAppContext {
    answers: Array<string>,
    setAnswers: React.Dispatch<React.SetStateAction<string[]>>
}
const AppContext = createContext<IAppContext>({} as IAppContext);
interface IAppContextProps {
    children: React.ReactNode
}
function AppProvider(props: IAppContextProps) {
    const [answers, setAnswers] = useState<Array<string>>([]);
    const value = {
        answers: answers,
        setAnswers: setAnswers
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>    
}

export {AppProvider, AppContext}

