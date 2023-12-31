import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => <><td>{text}</td><td>{value}</td></>

const Statics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const averageScore = (good * 1 + neutral * 0 + bad * -1) / total
  const positivePercent = (good / total) * 100

  if (total > 0) {
  return <>
        <Title text='statics' />
        <table>
          <tbody>

            <tr>
              <StatisticLine text='good' value={good} />
            </tr>
            <tr>
              <StatisticLine text='neutral' value={neutral} />
            </tr>
            <tr>
              <StatisticLine text='bad' value={bad} />
            </tr>
            <tr>
              <td>all</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{!isNaN(averageScore) ? averageScore : 0}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{!isNaN(positivePercent) ? positivePercent : 0} %</td>
            </tr>
          </tbody>
        </table>
  </>
  }

  return <>
    <Title text='statics' />
    <p>No feedback given</p>
  </>

}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const newValue = good + 1;
    setGood(newValue)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text='give feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
