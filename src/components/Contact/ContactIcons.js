import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          {s.iconPath ? (
            <img
              src={s.iconPath}
              alt={s.label}
              style={{ width: '18px', height: '18px', verticalAlign: 'text-top' }}
            />
          ) : (
            <FontAwesomeIcon icon={s.icon} />
          )}
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
