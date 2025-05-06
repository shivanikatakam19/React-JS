// hooks are resuale java script functions. we can use them for the code which is reusable
// they can be used in other components
// cleaner and maintainable code

import './App.css';
import GetWindowSize from './components/custom-hooks';

function App() {
  const size = GetWindowSize()

  return (
    <div className="App">
      <header className="App-header">
        <h3> Resize the window to see the difference</h3>
        <div>Window Width: {size.width}</div>
        <div>Window Height: {size.height}</div>
      </header>
    </div>
  );
}

export default App;
