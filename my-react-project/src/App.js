import logo from './logo.svg';
import './App.css';

const something = (num1, num2, word) => {
  const sum = num1 + num2;
  const mul = num1 * num2;

  const isEqual = (num1 === num2);

  var firstLetter = word[0].toUpperCase();
  const letterOne = word[0].capitalize();

  const same = firstLetter === letterOne;

  if (isEqual) {
    const squared = mul;
    return squared;
  } else if (num1 >= num2) {
    return sum;
  } else {
    console.log(same);
    return same;
  }



}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
