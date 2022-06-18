import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  // Get random range
  let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  Math.floor(Math.random() * arr.length);
  let random = arr[Math.floor(Math.random() * arr.length)];

  // Get random number
  let randomNum = Math.ceil(Math.random() * random);

  const [instrustion, setInstruction] = useState(
    `Guess the number from 1 to ${random}`
  );
  const [randomRange, setRandomRange] = useState(random);
  const [guessInput, setGuessInput] = useState('');
  const [randomNumber, SetRandomNumber] = useState(randomNum);
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log(randomNumber);
    console.log(randomRange);
  }, []);

  const inputTextHandler = (e) => {
    setGuessInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(guessInput);

    if (guessInput == randomNumber) {
      setResult('You Won!');
    } else if (guessInput > randomNumber && guessInput <= randomRange) {
      setResult('Number too high, try again');
    } else if (guessInput < randomNumber && guessInput >= 1) {
      setResult('Number too low, try again');
    } else if (guessInput == '' || guessInput == ' ') {
      setResult('You did not enter a number');
    } else if (guessInput > random || guessInput < 1) {
      setResult(`The number must be between 1 and ${randomRange}`);

      // setResult('You number is not within the range');
    } else {
      setResult('Not a number');
    }

    setGuessInput('');
  };

  return (
    <div className='App'>
      {/* <Form /> */}{' '}
      <section id='game'>
        <Container>
          <Row className='game'>
            <Col md={8} className='mx-auto my-auto text-center myGame'>
              <h3 id='guess'>{instrustion}</h3>
              <form action=''>
                <input
                  id='guessInput'
                  type='text'
                  value={guessInput}
                  onChange={inputTextHandler}
                />
                <br />
                <input
                  className='btn'
                  id='submitBtn'
                  type='submit'
                  value='Submit'
                  onClick={submitHandler}
                />
                <p
                  className='btn tryAgain'
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Play Again
                </p>
              </form>
              <h3 className='result'>{result}</h3>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
