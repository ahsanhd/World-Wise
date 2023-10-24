import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, type, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
