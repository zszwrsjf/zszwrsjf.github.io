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
      <div id="blogShow">
        <button id="backButton" type="button" onClick={handleBackClick}>返回</button>
        <h1 id="title">{blog.title}</h1>
        <ReactMarkdown>{blog.markdown}</ReactMarkdown>
        {showScrollButton && (
          <button id="scrollButton" type="button" onClick={handleScrollToTop}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} /> 返回顶部
          </button>
        )}
      </div>
      <Analytics />
    </div>
  );
};

export default BlogShow;
