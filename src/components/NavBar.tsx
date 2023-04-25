import * as React from 'react';
import '../style.css';

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
        <h1>SabRes</h1>
      </header>
    </div>
  );
}
