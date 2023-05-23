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
 * rendered by App
 */
function Eightball({ answers = DEFAULT_ANSWERS }) {

  const [answer, setAnswer] = useState(
    {
      msg: "Think of a question",
      color: "black"
    }
  );

  /**
   * set the answer state to a random answer from the available options
   */
  function chooseAnswer() {
    const randindex = getRandom(answers.length);

    setAnswer(answers[randindex]);
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
    <div onClick={chooseAnswer} style={style}>
      {answer.msg}
    </div>
  );
}

export default Eightball;