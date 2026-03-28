import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
];

const FootprintCell = ({ data }) => {
  const isExternal = data.image && data.image.startsWith('http');
  const gradient = gradients[data.id % gradients.length];

  return (
    <div className="footprint-cell">
      <Link to={`/onsen/${data.id}`} className="footprint-card">
        <div className="footprint-card-image">
          {data.image ? (
            <img
              src={isExternal ? data.image : `${process.env.PUBLIC_URL}${data.image}`}
              alt={data.title}
            />
          ) : (
            <div className="footprint-card-placeholder" style={{ background: gradient }}>
              <span>♨</span>
            </div>
          )}
        </div>
        <div className="footprint-card-body">
          <h3 className="footprint-card-title">{data.title}</h3>
          <p className="footprint-card-place">{data.placeName}</p>
          <time className="footprint-card-date">
            {dayjs(data.date).format('YYYY.MM.DD')}
          </time>
          <p className="footprint-card-desc">{data.desc}</p>
        </div>
      </Link>
    </div>
  );
};

FootprintCell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default FootprintCell;
