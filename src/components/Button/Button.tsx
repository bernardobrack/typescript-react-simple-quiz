import React from "react"
import "./style.css";

interface IProps {
    className?: string,
    children: React.ReactNode,
    onClick: () => void
}

export default function Button(props: IProps) {
    const {className, children, ...rest} = props;
    
    return <div className={`btn ${className}`} {...rest}>
        <p>{children}</p>
    </div>
}