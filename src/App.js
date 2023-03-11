
import React from 'react';
import './App.css';
import SearchMovies from './SearchMovies';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className='title'>
          <span>Film</span>
          <span className='title--finder'>Finder</span>
        </div>
        
        <SearchMovies />
      </div>
    );
  }
}

export default App;
