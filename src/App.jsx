import './App.css';
import { Button, Title, LargeButton } from './components/styled/Demo.styled';

function App() {
  return (
    <div className='App container'>
      <Title>React styled components</Title>
      <Button onClick={() => console.count('clicked')}>click me</Button>
      <Button type='submit' sm>
        click me lg btn
      </Button>
      <LargeButton>I am large button</LargeButton>
    </div>
  );
}

export default App;
