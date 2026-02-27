import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import S_img1 from '../../assets/Image/s_img2.jpg'
import S_img2 from '../../assets/Image/s_img3.jpg'
import S_img3 from '../../assets/Image/s_img1.jpg'
const data = [
  {
    img: S_img1,
    title: "Toronto,",
    span_title:"Canada",
    discription: "HURRY! GET THE BEST VILLA FOR YOU",
  },
  {
    img: S_img2,
    title: "Melbourne,",
    span_title:"Australia",
    discription: "BE QUICK! GET THE BEST VILLA",
  },
  {
    img: S_img3,
    title: "Miami,",
    span_title:"South Florida",
    discription: "ACT NOW! GET THE HIGHEST LEVEL PENTHOUSE",
  },
]
function Slider() {
  return (
    <Carousel>
      {
      data.map((value, index)=>{
        return(
          // eslint-disable-next-line react/jsx-key
         <Carousel.Item
          key={index}
          style={{
            backgroundImage: `url(${value.img})`,
            height: "100vh"
          }}
        >
          <div className="overlay"></div>
          <Carousel.Caption>
            <p>
              {value.title} <span>{value.span_title}</span>
            </p>
            <h3>{value.discription}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })
    }
    </Carousel>
  );
}

export default Slider;