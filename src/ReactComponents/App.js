import Playlists from './Playlists';
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Mixtape++: Annotate and Share Spotify Playlists!</a>
              </Navbar.Brand>
            </Navbar.Header>
            
          </Navbar>
        <Playlists>
        </Playlists>
      </div>
    );
  }
}

export default App;
