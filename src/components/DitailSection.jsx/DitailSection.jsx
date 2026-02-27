/* eslint-disable react/no-unescaped-entities */
import './DitailSection.css';
import imgd from '../../assets/Image/single-property.jpg';
import { Link } from 'react-router-dom';
import List from '../List/List';
import AccordionSection from '../AccordionSection/AccordionSection';

const DitailSection = () => {
  return (
    <section className='ditailsection'>
      <div className="container">
        <div className="row">
          <div className='col-lg-8 col-12 mb-4'>
            <div className='detail_img'>
              <img src={imgd} alt="Property" />
            </div>
            <div className='detail_content'>
              <span>Appartment</span>
              <h4>24 New Street Miami, OR 24560</h4>
              <p>
                Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website.
                TemplateMo provides you the 
                <Link to="#"> best free CSS templates</Link> in the world. Please tell your friends about it. 
                Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr
                yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                <br /><br />
                When you look for free CSS templates, you can simply type TemplateMo in any search engine website.
                In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
              </p>
              <AccordionSection />
            </div>
          </div>

          <div className='col-lg-4 col-12'>
            <List />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DitailSection;