import './Black_Button.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Black_Button = ({ btnB, to = "#" }) => {
  return (
    <Link to={to} className="black_button">
      {btnB}
    </Link>
  );
};

export default Black_Button;