import Map from '../Map/Map'
import Info_Item from '../Info_Item/Info_Item'
import phone from '../../assets/Image/phone-icon.png'
import email from '../../assets/Image/email-icon.png'
import Form from '../Form/Form'
import './Conact_section.css'

const Conact_section = () => {
  return (
    <div className='conact'>
      <div className='container'>
        {/* title */}
        <div className='row justify-content-center text-center'>
          <div className='col-lg-6'>
            <div className='top_conact'>
              <h6>| Contact Us</h6>
              <h2>Get In Touch With Our Agents</h2>
            </div>
          </div>
        </div>

        {/* content */}
        <div className='row align-items-start content'>

          {/* map */}
          <div className='col-lg-7 col-md-12'>
            <Map />

            <div className='conact-me'>
              <Info_Item img={phone} text="010-020-0340" />
              <Info_Item img={email} text="info@villa.co" />
            </div>
          </div>

          {/* form */}
          <div className='col-lg-5 col-md-12'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conact_section