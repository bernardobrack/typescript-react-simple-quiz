import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/quiz" element={<QuizPage />}/>
        <Route path="*" element={<h2>Not Found!!</h2>}/>
      </Routes>
    </div>
  )
}

export default App
