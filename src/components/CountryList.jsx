import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr, city) => {
    if (arr.map((el) => el.country.includes(city.country)))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  );
}

export default CountryList;

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
