import { useContext } from "react";
import { QuizContext } from "../../Context/quiz";
import WellDone from "../../Images/welldone.svg";

import "./GameOver.scss";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
