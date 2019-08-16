import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from './components/About'
import CustomNavbar from './components/CustomNavbar'
import Container from './components/Container'
import Home from './components/Home'
import TestEditor from './components/TestEditor'
import Editor from './components/Editor'
import DocumentBrowserController from './components/DocumentBrowserController';
import Footer from './components/Footer'
import Login from './components/Login'
import fire from './config/Fire'
import { DirectoryListingRepository } from './repositories/DirectoryListing'
import { DocumentRepository } from './repositories/Document'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      token: null,
    }
    this.authListener = this.authListener.bind(this)
  }
  
  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        user.getIdToken(/* forceRefresh */ true).then((idToken) => {
          // Send token to your backend via HTTPS
          // ...
          this.setState({ token: idToken })
        }).catch(function(error) {
          // Handle error
          console.error("Could not get the ID Token.")
          console.error(error)
        });
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

  render() {
    var globalProps = { 
      directoryListingRepository: new DirectoryListingRepository(this.state.token),
      documentRepository: new DocumentRepository(this.state.token)
    }
    console.log(this.state.token)
    const Application = () => {
      return (<>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/test-editor' component={TestEditor} />
        <Route exact path='/my-documents' render={
          (props) => <DocumentBrowserController {...props} {...globalProps} />} />
        <Route exact path='/edit/:uuid' render={
          (props) => <Editor {...props} {...globalProps} />} />
      </>)
    }
    return (
      <Router>
        <CustomNavbar user={this.state.user} />
        <Container>
          {this.state.user == null ? <Login /> : <Application />}
        </Container>
        <Footer></Footer>
      </Router>
    )
  }
}

export default App;
