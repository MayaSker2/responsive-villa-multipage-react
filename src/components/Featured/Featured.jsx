import './Featured.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '../List/List';
import AccordionSection from '../AccordionSection/AccordionSection';
import icon5 from '../../assets/Image/featured_img.jpg'

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <Row className="align-items-center no-gutters featured-row">
          <Col lg={4} md={6} sm={12} className="featured-image px-0">
              <img src={icon5} alt="icon" className="image" />
          </Col>
          
          <Col lg={4} sm={12} className="featured-middle px-0">
            <h6 className="featured-subtitle">| FEATURED</h6>
            <div className="featured-head">
               <h2>Best Apartment & Sea View</h2>
            </div>
            <AccordionSection />
          </Col>
          
          <Col lg={4} sm={12} className="featured-list px-0">
            <List />
          </Col>

        </Row>
      </div>
    </div>
  );
}

export default Featured;