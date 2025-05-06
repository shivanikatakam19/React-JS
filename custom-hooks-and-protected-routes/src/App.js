import './App.css';
import GetWindowSize from './components/custom-hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import RouterLayout from './components/router';
import ProtectedRoute from './components/protectedRoute';
import { useState } from 'react';


function App() {
  const size = GetWindowSize()

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3> Resize the window to see the difference</h3>
          <div>Window Width: {size.width}</div>
          <div>Window Height: {size.height}</div>
          <RouterLayout />
        </header>
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated
            ={isAuthenticated} />} >
            <Route path="home"
              element={<Home logout
                ={logout} />} />

          </Route>

          <Route path="/"
            element={<Login login
              ={login} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
