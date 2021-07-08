import { React, Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor () {
    super();
    this.state = {
      searchInput: ''
    }
  }

  render() {
    return (
      <header>
        <h1>Rancid Tomatillos</h1>
        <input
          type='text'
          placeholder='search movies'
          name= 'searchInput'
          // value={this.state.movies}
        />
      </header>
    )
  }
  
}

// conditional rendering for the search and return button 
export default Header;