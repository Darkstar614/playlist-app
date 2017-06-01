import React, { Component } from 'react';

class Playlist extends React.Component {
  render (){
    var lis = [];
    this.props.lists.forEach((list) => {
      lis.push(<li key={list.title}>{list.artist} - {list.title} :: {list.length}</li>)
    });
    return (
      <div className="playlist">
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}

export default Playlist;
