import { TextInput } from "flowbite-react";
import PropTypes from "prop-types";

const Input = ({ type, placeholder, id, onChange }) => {
  return (
    <div>
      <TextInput
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
