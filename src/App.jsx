import styled from 'styled-components';
import './App.css';

// sukriam h1 elementa pavadinimu Title naudodami styled components

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

// sukurti Button komponenta, prideti jam stiliaus
// panaudoti jsx
const Button = styled.button`
  padding: 1em 2em;
  background-color: transparent;
  font-size: 1.5rem;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: coral;
    color: white;
  }
`;

function App() {
  return (
    <div className='App container'>
      <Title>React styled components</Title>
      <Button>click me</Button>
    </div>
  );
}

export default App;
