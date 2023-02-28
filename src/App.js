import "./App.css";
import { useEffect, useState } from "react";
import QsAns from "./components/QsAns";
import Timer from "./components/Timer";
import User from "./components/User";

function App() {
  const list = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 300 },
  ].reverse();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("0 $");
  const[username,setUsername]=useState(null);
  useEffect(() => {
    if(questionNumber>1 && questionNumber<=3){
      setEarned(list.find((m)=>m.id===questionNumber-1).amount+" $");
    }
    else if(questionNumber===4){
      setTimeOut(true);
      setEarned("400 $");
    } 
  },[questionNumber, list]);
  return (
    <div className="app">
      {username? (
        <>{timeOut ? (
          <h1 className="earned">{username} you have {earned}</h1>
        ) : (
          <>
            <div className="main">
              <div className="top">
                <div className="timer"><Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/></div>
              </div>
              <div className="bottom">
                <QsAns
                  questionNumber={questionNumber}
                  setTimeOut={setTimeOut}
                  setQuestionNumber={setQuestionNumber}
                />
              </div>
            </div>
            <div className="side">
              <ul className="list">
                {list.map((item) => {
                  return (
                    <li
                      className={
                        questionNumber === item.id ? "amount active" : "amount"
                      }
                    >
                      <span className="left">{item.id}</span>
                      <span className="right">${item.amount}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}</>
      ):<User setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
