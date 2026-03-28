import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import FootprintCell from '../components/Footprints/FootprintCell';
import footprintsData from '../data/footprints';

const Footprints = () => (
  <Main title="Footprints">
    <article className="post" id="footprints">
      <header>
        <div className="title">
          <h2><Link to="/footprints">Footprints</Link></h2>
          <p>温泉巡りの記録</p>
        </div>
      </header>
      <div className="footprint-grid">
        {footprintsData.map((fp) => (
          <FootprintCell key={fp.id} data={fp} />
        ))}
      </div>
    </article>
  </Main>
);

export default Footprints;
