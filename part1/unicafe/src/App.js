import { useState } from "react";

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const StatisticsLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>;

const Header = (props) =>{
  return <div>
    <h1>give feedback</h1>
    <Button text={"good"} handleClick={props.handleGood} />
    <Button text={"neutral"} handleClick={props.handleNeutral} />
    <Button text={"bad"} handleClick={props.handleBad} />
    <br/>
  </div>
}

const Statistics = ({good, neutral, bad}) => {
  let ret = <div><h1>statistics</h1><p>No feedback given</p></div>;
  
  if (good !== 0 || neutral !== 0 || bad !== 0){
    ret = <div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"all"} value={good + neutral + bad} />
        <StatisticsLine text={"average"} value={(good-bad)/(good+neutral+bad)} />
        <StatisticsLine text={"positive"} value={(good / (good+neutral+bad) * 100) + " %"} />
      </tbody>
    </table>  
  </div>
  }

  return ret;
}



function App() {
  const [good, setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)


  return (
    <div>
      <Header handleGood={() => setGood(good + 1)} handleNeutral={() => setNeutral(neutral + 1)} handleBad={() => setBad(bad + 1)} />
      <Statistics good={good} neutral ={neutral} bad={bad} />
    </div>
  );
}

export default App;
