import PropTypes from 'prop-types';

const Button = ({ type, children, onClick }) => {
  const buttonTypes = {
    primary: 'btn-primary',
    default: 'btn-default',
    dashed: 'btn-dashed',
    text: 'btn-text',
    link: 'btn-link',
  };

  const buttonClass = `btn ${buttonTypes[type] || 'btn-default'}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
  onClick: () => {},
};

export default Button;
