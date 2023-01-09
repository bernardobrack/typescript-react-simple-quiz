import Button from "../Button/Button";

interface IProps {
    children: React.ReactNode
    onClick: () => void
}

export default function BigButton(props: IProps) {
    const { children, ...rest } = props;
    
    return <Button className="primary-btn big-btn" {...rest}>{children}</Button>
}