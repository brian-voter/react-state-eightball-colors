import { useState } from "react";
import { getRandom } from "./random";

const DEFAULT_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/**
 *
 * Creates an Eightball with the given answers
 *
 * props: answers: [{msg, color}, ...]
 * state: current answer {msg, color}
 *
 * App > Eightball
 */
function Eightball({ answers = DEFAULT_ANSWERS }) {
  const defaultState = {
    msg: "Think of a question",
    color: "black"
  };

  const [answer, setAnswer] = useState(defaultState);
  // const [greenCount, setGreenCount] = useState(0);
  // const [goldenrodCount, setGoldenrodCount] = useState(0);
  // const [redCount, setRedCount] = useState(0);

  const [colorCounts, setColorCounts] = useState({});

  /**
   * set the answer state to a random answer from the available options
   * keep track of the color count
   */
  function chooseAnswer() {
    const randindex = getRandom(answers.length);

    const chosenAnswer = answers[randindex];

    const oldCount = colorCounts[chooseAnswer.color] || 0;

    const newCounts = { ...colorCounts };
    newCounts[chosenAnswer.color] = oldCount + 1;

    setColorCounts(newCounts);

    // if (chosenAnswer.color === "green") {
    //   setGreenCount(greenCount + 1);
    // } else if (chosenAnswer.color === "goldenrod") {
    //   setGoldenrodCount(goldenrodCount + 1);
    // } else if (chosenAnswer.color === "red") {
    //   setRedCount(redCount + 1);
    // }

    setAnswer(chosenAnswer);
  }

  /**
   * Reset the ball and color count
   */
  function resetBall() {
    setAnswer(defaultState);
    // setGreenCount(0);
    // setGoldenrodCount(0);
    // setRedCount(0);
    setColorCounts({});
  }


  const style = {
    backgroundColor: answer.color,
    color: "white",
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div>
      <div onClick={chooseAnswer} style={style}>
        {answer.msg}
      </div>
      <div className="container-fluid">
        <button className="btn btn-primary" onClick={resetBall}>
          Reset
        </button>
        {
          Object.entries(colorCounts).map(([color, count]) =>
            <div>
              {color} count: {count}
            </div>
          )
        }
        {/* <div>
          Green Count: {greenCount}
        </div>
        <div>
          Goldenrod Count: {goldenrodCount}
        </div>
        <div>
          Red Count: {redCount}
        </div> */}
      </div>
    </div>
  );
}

export default Eightball;