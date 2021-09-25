import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatItem.module.css';

const r = () => Math.floor(Math.random() * 256);
const randomColor = () => 'rgb(' + r() + ',' + r() + ',' + r() + ', 0.9)';

const StatItem = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: randomColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
