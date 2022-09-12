import { useContext } from "react";
import { QuizContext } from "../../Context/quiz";

import Quiz from "../../Images/quiz.svg";

import "./Welcome.scss";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome">
      <h2>Seja Bem-Vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
