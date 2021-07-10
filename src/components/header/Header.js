import React from 'react';
import './Header.css';

const Header = ({renderMainPage}) => {
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
        <button onClick={() => renderMainPage()}>CLICK ME TO RETURN</button>
      </header>
    )
}

export default Header;