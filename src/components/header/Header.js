import React from 'react';
import './Header.css';
import MyImage from './home.png';

const Header = ({findMovie, renderMainPage}) => {
  return (
    <header>
      {findMovie && <button className="home-button" onClick={renderMainPage}><img className="home-image" src={MyImage} /></button>}
      <h1 className="siteTitle">Rancid Tomatillos</h1>
      <input
        className = 'search'
        type='text'
        placeholder='search movies'
        name= 'searchInput'
        // value={this.state.movies}
      />
    </header>
  )
}

export default Header;