import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import blogsData from '../data/blogs/BlogMaps';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';

const BlogShow = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id, 10));

  const blogShowStyle = {
    width: '80%',
    margin: '0 auto',
    marginTop: '6em',
  };
  const headingStyle = {
    fontSize: '40px',
    textAlign: 'center',
  };

  const ScrollButtonStyle = {
    fontSize: '16px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#fff',
    paddingInline: '1em',
  };

  const BackButtonStyle = {
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#fff',
    position: 'fixed',
    left: '10%',
    transform: 'translate(0, -50%)',
    paddingInline: '1em',
  };

  const history = useHistory();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.innerHeight < document.documentElement.scrollHeight);
    };

    handleScroll();

    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleBackClick = () => {
    history.goBack();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navigation />
      <div style={blogShowStyle}>
        <button type="button" style={BackButtonStyle} onClick={handleBackClick}>返回</button>
        <h1 style={headingStyle}>{blog.title}</h1>
        <ReactMarkdown>{blog.markdown}</ReactMarkdown>
        {showScrollButton && (
          <button type="button" style={ScrollButtonStyle} onClick={handleScrollToTop}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} /> 返回顶部
          </button>
        )}
      </div>
      <Analytics />
    </div>
  );
};

export default BlogShow;
