import './Agents.css'
import phone from '../../assets/Image/phone-icon.png'
import email from '../../assets/Image/email-icon.png'
import Info_Item from '../Info_Item/Info_Item'
import Form from '../Form/Form'
import Map from '../Map/Map'

const Agents = () => {
  return (
    <section className='agents'>
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-6 col-12 mb-4">
            <h6>| Contact Us</h6>
            <h2>Get In Touch With Our Agents</h2>
            <p>
              When you really need to download free CSS templates,
              please remember our website TemplateMo. Also, tell your friends about our website. 
              Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website.
              If you need more information, please contact us.
            </p>
            <div className='agent-info'>
              <Info_Item img={phone} text="010-020-0340" />
              <Info_Item img={email} text="info@villa.co" />
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-6 col-12 mb-4 form">
            <Form />
          </div>

          {/* Map */}
          <div className="col-12 map mt-4">
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agents