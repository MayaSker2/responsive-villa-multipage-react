import './Best_Deal.css'
import Black_Button from '../Black_Button/Black_Button'
import Red_Button from '../Red_Button/Red_Button'
import { Col } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const Best_Deal = ({Space ,Floor ,rooms ,Parking ,Payment ,info}) => {
  return (
    <section className='deal_section'>
      <div className='container'>
        <div className='row mb-5 align-items-end'>
          <div className='col-lg-4 col-12 mb-4'>
            <div className='deal-top'>
              <h6>| Best Deal</h6>
              <h2>
                Find Your Best <br />
                Deal Right Now!
              </h2>
            </div>
          </div>

          <div className='col-lg-8 col-12 button_section'>
            <div className='buttons'>
              <Red_Button btnR="Appartment" />
              <Black_Button btnB="Villa House" />
              <Black_Button btnB="Penthouse" />
            </div>
          </div>
        </div>

        <div className='row deal-group gy-4'>
          <Col lg={4} md={6} xs={12} className="part1">
            <ul>
              <li>Total Flat Space <span>{Space}</span></li>
              <li>Floor number <span>{Floor}</span></li>
              <li>Number of rooms <span>{rooms}</span></li>
              <li>Parking Available <span>{Parking}</span></li>
              <li>Payment Process <span>{Payment}</span></li>
            </ul>
          </Col>

          <Col lg={4} md={6} xs={12} className="part2"></Col>

          <Col lg={4} md={12} xs={12} className="part3">
            <h4>{info}</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, officiis! Ea quos eos, impedit incidunt deserunt adipisci enim maxime commodi porro excepturi aliquam corporis nulla quo natus animi velit ducimus...
            </p>
          </Col>
        </div>

      </div>
    </section>
  )
}

export default Best_Deal