import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ className, spanClassName }) => {
  return (
    <Link to="/" className={className}>
      <span className={spanClassName}>Awi&apos;s</span> Blog
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string.isRequired,
  spanClassName: PropTypes.string.isRequired,
};

export default Logo;
