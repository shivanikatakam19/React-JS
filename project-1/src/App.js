import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ClassComponent from './components/classComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <ClassComponent />
      <Footer />
    </div>
  );
}

export default App;
