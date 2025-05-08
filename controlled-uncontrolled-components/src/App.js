import './App.css';
import ControlledComponent from './components/controlled-component';
import UncontrolledComponent from './components/uncontrolled-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlledComponent />
        <UncontrolledComponent />
      </header>
    </div>
  );
}

export default App;
