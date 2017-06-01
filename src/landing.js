import React, { Component } from 'react';
import Welcome from './welcome';
import Playlist from './playlist';

class Landing extends React.Component {
  constructor() {
    super();
  }
  render() {
      return (
        <div>
          <Welcome />
           <Playlist lists={this.props.playlists[0].playlist}/>
           <Playlist lists={this.props.playlists[1].playlist}/>
           <Playlist lists={this.props.playlists[2].playlist}/>
        </div>
      );
    }
}

export default Landing;
