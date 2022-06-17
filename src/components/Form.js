import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export const Form = () => {
  return (
    <div>
      <section id='game'>
        <Container>
          <Row className='game'>
            <Col md={8} className='mx-auto my-auto text-center myGame'>
              <h2 id='guess'>Guess the number</h2>
              <form action=''>
                <input id='guessInput' type='text' />
                <br />
                <input
                  className='btn'
                  id='submitBtn'
                  type='submit'
                  value='Submit'
                />
                <p className='btn tryAgain'>Play Again</p>
              </form>
              <h3 className='result'></h3>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Form;
