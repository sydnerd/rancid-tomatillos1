import React from 'react';
import './Header.css';

const Header = ({findMovie, renderMainPage}) => {
    return (
      <header>
        <h1>Rancid Tomatillos</h1>
        <input
          className = 'search'
          type='text'
          placeholder='search movies'
          name= 'searchInput'
          // value={this.state.movies}
        />
        {/* <button>Test</button> */}
        {findMovie && <button onClick={renderMainPage}>HOME</button>}
      </header>
    )
}

export default Header;