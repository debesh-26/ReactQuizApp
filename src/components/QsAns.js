import React, { useEffect } from "react";
import "./QsAns.css";
import data from "./Data.js";
import { useState } from "react";
const QsAns = ({ questionNumber, setTimeOut, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [questionNumber]);
 
  const handleOnChange = (item) => {
    setselectedAnswer(item);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(item.correct?"answer correct":"answer wrong");
    }, 1000);
    setTimeout(() => {
      if (item.correct) {
        setQuestionNumber((prev) => prev + 1);
        setselectedAnswer(null);
      } else {
        setTimeOut(true);
      }
    },2000);
  }

  return (
    <div className="qsans">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => {
          return (
            <div className={selectedAnswer===item ? className : "answer"} onClick={()=>handleOnChange(item)}>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QsAns;
