import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import FootprintCell from '../components/Footprints/FootprintCell';
import onsenData from '../data/footprints';

const Footprints = () => (
  <Main title="温泉収集">
    <article className="post" id="footprints">
      <header>
        <div className="title">
          <h2><Link to="/onsen">温泉収集</Link></h2>
          <p>温泉巡りの記録 ♨</p>
        </div>
      </header>
      <div className="footprint-grid">
        {onsenData.map((fp) => (
          <FootprintCell key={fp.id} data={fp} />
        ))}
      </div>
    </article>
  </Main>
);

export default Footprints;
