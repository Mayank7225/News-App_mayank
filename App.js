import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<React.Fragment><News key="general" pageSize={9} country={"in"} category={"general"} /></React.Fragment>} />
            <Route path='/business' element={<React.Fragment><News key="business" pageSize={9} country={"in"} category={"business"} /></React.Fragment>} />
            <Route path='/entertainment' element={<React.Fragment><News key="entertainment" pageSize={9} country={"in"} category={"entertainment"} /></React.Fragment>} />
            <Route path='/general' element={<React.Fragment><News key="general" pageSize={9} country={"in"} category={"general"} /></React.Fragment>} />
            <Route path='/health' element={<React.Fragment><News key="health" pageSize={9} country={"in"} category={"health"} /></React.Fragment>} />
            <Route path='/science' element={<React.Fragment><News key="science" pageSize={9} country={"in"} category={"science"} /></React.Fragment>} />
            <Route path='/sports' element={<React.Fragment><News key="sports" pageSize={9} country={"in"} category={"sports"} /></React.Fragment>} />
            <Route path='/technology' element={<React.Fragment><News key="technology" pageSize={9} country={"in"} category={"technology"} /></React.Fragment>} />
          </Routes>
        </Router>
      </div>
    )
  }
}