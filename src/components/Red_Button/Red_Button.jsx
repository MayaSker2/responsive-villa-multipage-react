import './Red_Button.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Red_Button = ({ btnR, to = "#" }) => {
  return (
    <Link to={to} className="red_button">
      {btnR}
    </Link>
  );
};

export default Red_Button;