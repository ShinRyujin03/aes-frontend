import { useState } from 'react';
import './header.css'; // Import file CSS của header

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <div className="header-content">
         <img src="logo.svg" alt="Logo" className="logo" />
        <nav>
          <a href="/">Home</a>
          <a href="/check-essay">Doing Test</a>
          <a href="/topic">Topic</a>
          <a href="/ielts-writing-samples">Samples</a>
        </nav>
        <div className="icons">
          <button className="icon-button">&#36;</button>
          <button className="icon-button">&#128100;</button>
          <div className="search-container">
            <input
              type="text"
              id="search-bar"
              placeholder="Search..."
              style={{ width: isSearchOpen ? '250px' : '0', height: isSearchOpen ? '50px' : '0' } }
            />
            <button className="search-button, icon-button" onClick={toggleSearch}>
              &#128269;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
