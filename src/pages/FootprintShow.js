import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import footprintsData from '../data/footprints';

const FootprintShow = () => {
  const { id } = useParams();
  const footprint = footprintsData.find((fp) => fp.id === parseInt(id, 10));

  const history = useHistory();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.innerHeight < document.documentElement.scrollHeight);
    };
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  if (!footprint) {
    return (
      <div>
        <Navigation />
        <div id="footprintShow">
          <button id="backButton" type="button" onClick={() => history.goBack()}>
            返回
          </button>
          <h1 id="title">Not Found</h1>
        </div>
        <Analytics />
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div id="footprintShow">
        <button id="backButton" type="button" onClick={() => history.goBack()}>
          返回
        </button>
        <h1 id="title">{footprint.title}</h1>
        <div className="footprint-meta">
          <span className="footprint-meta-place">{footprint.placeName}</span>
          <time className="footprint-meta-date">
            {dayjs(footprint.date).format('YYYY.MM.DD')}
          </time>
          {footprint.mapLink && (
            <a
              href={footprint.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footprint-meta-map"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 地図で見る
            </a>
          )}
        </div>
        {footprint.markdown ? (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {footprint.markdown}
          </ReactMarkdown>
        ) : (
          <div className="footprint-detail-content">
            <div className="footprint-detail-image">
              <img
                src={`${process.env.PUBLIC_URL}${footprint.image}`}
                alt={footprint.title}
              />
            </div>
            <p>{footprint.desc}</p>
          </div>
        )}
        {showScrollButton && (
          <button
            id="scrollButton"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faArrowAltCircleUp} /> 返回顶部
          </button>
        )}
      </div>
      <Analytics />
    </div>
  );
};

export default FootprintShow;
