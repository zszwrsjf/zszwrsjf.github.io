import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import TagBar from '../components/Template/TagBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const SubBlog = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Zhang Song" defaultTitle="Zhang Song" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div className="mobile-tagbar">
        <TagBar />
      </div>
      <div id="SubBlog">
        {props.children}
      </div>
      <TagBar />
    </div>
  </HelmetProvider>
);

SubBlog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
};

SubBlog.defaultProps = {
  children: null,
  title: null,
  description: "Zhang Song's personal website.",
};

export default SubBlog;
