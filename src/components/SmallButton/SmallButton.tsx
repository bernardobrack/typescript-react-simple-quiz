import Button from "../Button/Button";

interface IProps {
    children: React.ReactNode,
    className?: string
    onClick: (...args: Array<any>) => void,
    isSelected?: boolean,
    correct?: boolean,
    reveal?: boolean
}

export default function SmallButton(props: IProps) {
    const {className, children, onClick, isSelected, correct, reveal} = props;
    const classes = isSelected
                    ? (reveal
                    ? (correct
                    ? `correct ${className}` 
                    : `incorrect ${className}`)
                    : `selected ${className}`)
                    : `not-selected ${className}`;
    return <Button onClick={onClick} className={`small-btn ${classes}`}>{children}</Button>;
}