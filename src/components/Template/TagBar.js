import React from 'react';
import { Link } from 'react-router-dom';

const TagBar = () => (
  <section id="tagbar" className="tagbar">
    <header className="list">
      <h2>Categories</h2>
    </header>
    <ul>
      <li className="item"><Link to="/blogs?tag=travel" className="link">Travel</Link></li>
      <li className="item"><Link to="/blogs?tag=food" className="link">Food</Link></li>
      <li className="item"><Link to="/blogs?tag=anime" className="link">Anime</Link></li>
      <li className="item"><Link to="/blogs?tag=reflection" className="link">Reflection</Link></li>
    </ul>
  </section>
);

export default TagBar;
