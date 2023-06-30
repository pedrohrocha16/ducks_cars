import CardExample from '../components/Card'
import Carrosel from '../components/Carrosel'
import './Home.css'

import carEstoqueHome from '../img/car_estoque_home.jpg'
import Naldo from '../img/naldo.jpg'
import ManoelGomes from '../img/manoel_gomes.jpg'
import CardDepoiments from '../components/Card_depoiments'

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
            firstText="Veículo 0 KM"
            seccondText="490.000,00"
            details="Detalhes"   
          />
          <CardExample
            imgCard={carEstoqueHome}
            titleCard="Range Rover Velar"   
            firstText="Veículo 0 KM"
            seccondText="490.000,00"
            details="Detalhes"   
          />
          <CardExample
            imgCard={carEstoqueHome}
            titleCard="Range Rover Velar"   
            firstText="Veículo 0 KM"
            seccondText="490.000,00"
            details="Detalhes"   
          />
          <CardExample
            imgCard={carEstoqueHome}
            titleCard="Range Rover Velar"   
            firstText="Veículo 0 KM"
            seccondText="490.000,00"
            details="Detalhes"   
          />
        </div>
      </div>
      <div className='depoiments'>
        <h5>Depoimentos de Clientes</h5>
          <div className='depoiment_card'>
            <CardDepoiments
              imgCard={Naldo}
              titleCard="Naldo Benny"   
              firstText="...veículos de excelente qualidade, recomendo a todos!"
            />
            <CardDepoiments
              imgCard={ManoelGomes}
              titleCard="Manoel Gomes"   
              firstText="...carro bom demaize"
            />
          </div>
      </div>
    </div>
  )
}

export default Home


//props do card: fotoVeic 'src', marcaModelo, novoSemiNovo