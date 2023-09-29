import logo from './logo.svg';
import './App.css';
// Each component needs to be imported
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32"/>
    </div>
  );
}

export default App;
