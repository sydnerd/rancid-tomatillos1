import React from 'react';
import './Header.css';
import MyImage from './home.png';

const Header = ({findMovie, renderMainPage}) => {
    return (
      <header>
        {findMovie && <button className="home-button" onClick={renderMainPage}><img src={MyImage} /></button>}
        <h1>Rancid Tomatillos</h1>
        <input
          className = 'search'
          type='text'
          placeholder='search movies'
          name= 'searchInput'
          // value={this.state.movies}
        />
        {/* <button>Test</button> */}
      </header>
    )
}

export default Header;