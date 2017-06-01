import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './landing';
import './index.css';

const FIRST_LIST = [
  {artist: 'Daft Punk', title: 'Around the World', length: '8:50'},
  {artist: 'Evanescence', title: 'Taking over Me', length: '4:43'},
  {artist: 'Blink 182', title: 'All the Small Things', length: '3:25'},
  {artist: 'Sum 41', title: 'Over my Head', length: '2:30'},
  {artist: 'Metallica', title: 'Master of Puppets', length: '3:50'},
];

const PLAYLISTS = [
  {genre: 'Classical', playlist: FIRST_LIST, special: true, creator: 'Brent'},
  {genre: 'Electronica', playlist: FIRST_LIST, special: true, creator: 'Mark Whalberg'},
  {genre: 'Electronica', playlist: FIRST_LIST, special: false, creator: 'Emily'},
  {genre: 'Rock', playlist: FIRST_LIST, special: true, creator: 'James Hetfield'},
  {genre: 'Pop', playlist: FIRST_LIST, special: false, creator: 'Roger'},
  {genre: 'Regae', playlist: FIRST_LIST, special: true, creator: 'Hank'}
];

ReactDOM.render(
  <Landing playlists={PLAYLISTS}/>,
  document.getElementById('root')
);
