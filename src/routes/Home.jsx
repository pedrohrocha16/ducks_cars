import CardExample from '../components/Card'
import Carrosel from '../components/Carrosel'
import './Home.css'

import carEstoqueHome from '../img/car_estoque_home.jpg'
import carSeccondEstoqueHome from '../img/car02_estoque_home.jpeg'
const Home = () => {
return (
    <div>
      <Carrosel />
      <div className='home_estoque'>
        <h5>Novidades no Estoque</h5>
          <div className='veiculos_estoque'>
              <CardExample
                imgCard={carEstoqueHome}
                titleCard="Range Rover Velar" 
                seccondText="R$ 490.000,00"
                details="Detalhes"   
              />
               <CardExample
                imgCard={carSeccondEstoqueHome}
                titleCard="BMW X1" 
                seccondText="R$ 349.950,00"
                details="Detalhes"   
              />
        </div>  
      </div>
    </div>
  )
}

export default Home
