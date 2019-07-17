import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from './components/About'
import CustomNavbar from './components/CustomNavbar'
import Container from './components/Container'
import Home from './components/Home'
import TestEditor from './components/TestEditor'


function App() {
  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/test-editor' component={TestEditor} />
      </Container>
    </Router>
  );
}

export default App;
