import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from './components/About'
import CustomNavbar from './components/CustomNavbar'
import Container from './components/Container'
import Home from './components/Home'
import TestEditor from './components/TestEditor'
import DocumentBrowserController from './components/DocumentBrowserController';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/test-editor' component={TestEditor} />
        <Route exact path='/my-documents' component={DocumentBrowserController} />
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
