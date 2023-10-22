import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
function CityItem({ city }) {
  return <li>city</li>;
}

export default CityItem;

CityItem.propTypes = {
  city: PropTypes.instanceOf([PropTypes.string, PropTypes.any]),
};
