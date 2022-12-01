import './App.css';
import { Button, Title, LargeButton } from './components/styled/Demo.styled';

function App() {
  return (
    <div className='App container'>
      <Title>React styled components</Title>
      <Button>click me</Button>
      <Button sm>click me lg btn</Button>
      <LargeButton>I am large button</LargeButton>
    </div>
  );
}

export default App;
