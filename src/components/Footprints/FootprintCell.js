import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const FootprintCell = ({ data }) => (
  <div className="footprint-cell">
    <Link to={`/footprints/${data.id}`} className="footprint-card">
      <div className="footprint-card-image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
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

FootprintCell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default FootprintCell;
