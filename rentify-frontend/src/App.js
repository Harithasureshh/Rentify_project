import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import PropertyList from './components/PropertyList';

const Home = () => {
  return (
    <h1>Welcome to Rentify</h1>
  )
}

function App() {
    return (
        // <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/properties" element={<PropertyList />} />
                    <Route path="/" exact element={<Home/>} />
                </Routes>
            </div>
        // </Router>
    );
}

export default App;
   