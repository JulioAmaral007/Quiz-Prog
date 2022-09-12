import { useContext, useEffect } from "react";
import { QuizContext } from "./Context/quiz";

import Welcome from "./Components/Welcome/Welcome";
import Question from "./Components/Question/Question";
import GameOver from "./Components/GameOver/GameOver";

import "./App.scss";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
