import { useNavigate } from "react-router-dom"
import BigButton from "../components/BigButton/BigButton"
import "./Home.css";

export default function Home(){
    const navigate = useNavigate();

    function handleButtonClick(): void {
        navigate("/quiz")
    }
    return <section className="home">
        <h1>Quizzical</h1>
        <p id="home-description">Some description if needed</p>
        <BigButton onClick={handleButtonClick}>Start quiz</BigButton>
    </section>
}