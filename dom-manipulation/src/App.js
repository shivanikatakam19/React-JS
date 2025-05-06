
import './App.css';
import UseRefs from './components/useRefs';
import Form from './components/forwardRefParent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseRefs />
        <Form />
      </header>
    </div>
  );
}

export default App;
