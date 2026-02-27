import './Info_Item.css'
// eslint-disable-next-line react/prop-types
const Info_Item = ({img ,text}) => {
  return (
    <div className='items'>
        <img src={img} alt="" />
        <h6>{text}</h6>
    </div>
  )
}

export default Info_Item