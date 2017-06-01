import React, { Component } from 'react';
import Playlist from './playlist';

class Welcome extends React.Component {
  constructor() {
    super();
  }
  render() {
      return (
        <div>
          <h1>Welcome to the ultimate Playlist App!</h1>
          <p className="content">The goal of this project is to provide one place for all
           of your music playlists that is completely agnostic of music services.
           This way you can take your playlists with you whereever you go.</p>
        </div>
      );
    }
}

export default Welcome;
