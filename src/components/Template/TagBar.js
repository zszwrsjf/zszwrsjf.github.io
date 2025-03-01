import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TagBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="tagbar" className={isExpanded ? 'expanded' : ''}>
      <header className="list" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>Categories</h2>
        <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
      </header>
      <ul className="tag-list">
        <li className="item"><Link to="/blogs?tag=travel" className="link">Travel</Link></li>
        <li className="item"><Link to="/blogs?tag=food" className="link">Food</Link></li>
        <li className="item"><Link to="/blogs?tag=anime" className="link">Anime</Link></li>
        <li className="item"><Link to="/blogs?tag=reflection" className="link">Reflection</Link></li>
        <li className="item"><Link to="/blogs?tag=coding" className="link">Coding</Link></li>
      </ul>
    </section>
  );
};

export default TagBar;
