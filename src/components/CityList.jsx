import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import PropTypes from "prop-types";
function CityList({ cities, isLoading }) {
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
