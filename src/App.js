import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import Nav from './components/Nav';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
        return (
            <div>
            <Router>
                <Nav />
                <Main />
            </Router>
            </div>
        )
    }
}

export default App;
