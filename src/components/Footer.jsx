import './Footer.css'
import {FaFacebook, FaInstagram, FaYoutube, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {

  return (
    <div className='footer'>
      <h6>Contato</h6>
        <div className='icons'>
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
        <p className='copyright'>&copy;<span>Duck's Car 2023</span></p>
    </div>
  )
}

export default Footer