import './App.css';
import ReactFragments from './components/react-fragments';
import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Greetings from './components/pure-component-class';
import { GreetingMemo } from './components/pure-component-functional';
import ApiFetch from './components/environment-file';

const About = lazy(() => import('./components/about'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Home = lazy(() => import('./components/home'));
const User = lazy(() => import('./components/user'));
const Modal = lazy(() => import('./components/modal'));

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [name1, setName1] = useState('');
  const [address1, setAddress1] = useState('');

  const data = {
    name: "Shivani",
    email: "shivani@gmail.com"
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // observe the console to see the results
  // in the below function the setName is called for every 5 seconds. 
  // but the component does not render every time as the prop value is not changed.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setName('c');
      console.log('pure class component called')
      setName1('f')
      console.log('pure functional component called')
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <h3>React Fragments</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <ReactFragments rowData={data} />
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div>
              <h4>Component based lazy loading</h4>
              <button onClick={openModal}>Open Modal</button>
              {isModalOpen && (
                <Suspense fallback={<div>Modal Loading...</div>}>
                  <Modal onClose={closeModal} />
                </Suspense>
              )}
            </div>
          </div>
          <div>
            <h4>Route based lazy loading</h4>
            <Navbar className="dark">
              <Container>
                <Nav>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/user">User</NavLink>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </Nav>
              </Container>
            </Navbar>
            <div>
              <Outlet />
            </div>
            <Suspense fallback={<div>Loading....</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Suspense>
          </div>
          <div>
            <h4>Pure Component by extending PureComponent class</h4>
            <label>Name: <input value={name} onChange={e => setName(e.target.value)} /></label><br />
            <label>Address: <input value={address} onChange={e => setAddress(e.target.value)} /></label>
            <Greetings name={name} />
          </div>
          <div>
            <h4>Pure Component using Memo</h4>
            <label>Name: <input value={name1} onChange={e => setName1(e.target.value)} /></label><br />
            <label>Address: <input value={address1} onChange={e => setAddress1(e.target.value)} /></label>
            <GreetingMemo name={name1} />
          </div>
          <div>
            <ApiFetch />
          </div>
        </header>
      </div >
    </BrowserRouter >
  );
}

export default App;