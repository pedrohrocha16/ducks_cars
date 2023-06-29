import Carousel from 'react-bootstrap/Carousel';
import './Carrosel.css'
import carOne from '../img/car_sld01.jpg'
import carTwo from '../img/car_sld02.jpg'
import carThree from '../img/car_sld03.jpg'

function Carrosel() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="carousel"
          src={carOne}
          alt="First slide"
        />
        <Carousel.Caption>
            <div className="desc">
               <h5>Duck's Car</h5>
               <p>Os melhores carros, com excelente procedência!</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={carTwo}
          alt="Second slide"
        />
        <Carousel.Caption>
            <div className="desc">
               <h5>Duck's Car</h5>
               <p>Marcas premium, nacionais e importados.</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={carThree}
          alt="Third slide"
        />
        <Carousel.Caption>
            <div className="desc">
               <h5>Duck's Car</h5>
               <p>Veículos novos e semi novos!</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;