import P from 'prop-types';
import './style.css';

export const Button = ({ text, onClick, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.String.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
