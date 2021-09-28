import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatItem from '../StatItem/StatItem';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
