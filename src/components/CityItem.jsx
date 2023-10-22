import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <p className={styles.date}>{date}</p>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;

CityItem.propTypes = {
  city: PropTypes.instanceOf([PropTypes.string, PropTypes.any]),
};
