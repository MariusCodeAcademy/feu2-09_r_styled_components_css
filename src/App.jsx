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
      {/* sitas ne visai veikia */}
      <Button as='a' href='#about.html'>
        I am link button
      </Button>
    </div>
  );
}

export default App;
