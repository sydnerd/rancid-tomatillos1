import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import MyImage from './home.png';

const Header = ({findMovie, renderMainPage}) => {
   return (
        <header>
        <Link to='/'>
          <button alt="home-button" aria-label="Home Button" className="home-button" onClick={renderMainPage}>
            <img alt="home button" className="home-image" src={MyImage} />
          </button>
        </Link>
        <h1 className="site-title">Rancid Tomatillos</h1>
        {/* <input
          className = 'search'
          type='text'
          placeholder='search movies'
          name= 'searchInput'
          value={this.state.movies}
        /> */}
      </header>
  )
}

export default Header;