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
import onsenData from '../data/footprints';

const FootprintShow = () => {
  const { id } = useParams();
  const item = onsenData.find((fp) => fp.id === parseInt(id, 10));

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

  if (!item) {
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

  let imgSrc = null;
  if (item.image) {
    imgSrc = item.image.startsWith('http') ? item.image : `${process.env.PUBLIC_URL}${item.image}`;
  }

  return (
    <div>
      <Navigation />
      <div id="footprintShow">
        <button id="backButton" type="button" onClick={() => history.goBack()}>
          返回
        </button>
        <h1 id="title">{item.title}</h1>
        <div className="footprint-meta">
          <span className="footprint-meta-place">{item.placeName}</span>
          <time className="footprint-meta-date">
            {dayjs(item.date).format('YYYY.MM.DD')}
          </time>
          {item.mapLink && (
            <a
              href={item.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footprint-meta-map"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 地図で見る
            </a>
          )}
        </div>
        {item.markdown ? (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {item.markdown}
          </ReactMarkdown>
        ) : (
          <div className="footprint-detail-content">
            {imgSrc && (
              <div className="footprint-detail-image">
                <img src={imgSrc} alt={item.title} />
              </div>
            )}
            <p>{item.desc}</p>
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
