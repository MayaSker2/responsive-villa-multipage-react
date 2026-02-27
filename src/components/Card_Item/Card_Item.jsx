import './Card_Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card_Item = ({img ,type ,price ,compare ,Bedrooms ,Bathroom ,Area ,Floor ,Parking}) => {
  return (
    <Card className='card h-100 '>
        <Card.Img variant="top" src={img} className="card-img" />

        <Card.Body className="card-body-custom d-flex flex-column">
            
            <div className='top-info d-flex justify-content-between align-items-center'>
                <span>{type}</span>
                <h6 className='price'>{price}</h6>
            </div>

            <div className='villa-info'>
                <h4>
                  <Link to="#">{compare}</Link>
                </h4>
            </div>

            <div className='card_text'>
                <ul>
                    <li>Bedrooms: <span>{Bedrooms}</span></li>
                    <li>Bathroom: <span>{Bathroom}</span></li>
                    <li>Area: <span>{Area}</span></li>
                    <li>Floor: <span>{Floor}</span></li>
                    <li>Parking: <span>{Parking}</span></li>
                </ul>
            </div>

            <div className="mt-auto text-center">
                <Link to="#">
                  <Button className='button'>Schedule a visit</Button>
                </Link>
            </div>

        </Card.Body>
    </Card>
  )
}

export default Card_Item