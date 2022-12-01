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

function App() {
  return (
    <div className='App'>
      <Title>React styled components</Title>
      <Title>more title</Title>
    </div>
  );
}

export default App;
