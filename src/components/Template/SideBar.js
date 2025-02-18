import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>張頌　チョウショウ Zhang Song</h2>
        <p><a href="mailto:zszwrsjf@gmail.com">zszwrsjf@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&apos;m Zhang Song from China. Working as a software engineer.</p>
      <p>Japanese: Business Level(JLPT N2 180; BJT 576), English: Business Level(TOEIC 935)</p>
      <p>I like travel, food and anime.</p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">use template from &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
