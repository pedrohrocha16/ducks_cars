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
      <main className='main'>
        <h2>Nossa História:</h2>
        <p>Tudo começou na década de 80, quando um simples entregador de jornal, que vivia com o carro em manutenção, teve a brilhante ideia de negociar frequentemente seu veículo, com o único intuito de fazer suas entregas sem que o carro lhe deixasse “na mão” toda semana.
          Porém, ele descobriu que, além de conseguir trabalhar sossegado, sem que seu carro fosse a todo momento para manutenção, que possuía um incrível dom de negociar, e que também era possível ganhar dinheiro com essas transações.
          Quando se deu conta, estava ganhando mais dinheiro com as vendas e trocas de seus veículos do que com a renda advinda do emprego no jornal e, por isso, resolveu deixar seu emprego e montar uma loja de automóveis no bairro de Itaquera em 1991.
          No entanto, seis anos depois, em 1997, a loja teve de ser fechada por conta uma crise financeira.
          Todavia, ele não desanimou e, com o apoio da família e amigos, conseguiu fundar a Duck's Car já no ano seguinte, em 1998, no bairro Inter Lagos, onde permanece até hoje.</p>
      </main>
      <div className='home_estoque'>
        <h5>Novidade no Estoque</h5>
        <CardExample
          imgCard={carEstoqueHome}
          titleCard="Range Rover Velar"   
          firstText="Veículo 0 KM"
          seccondText="490.000,00"
          details="Detalhes"   
        />
      </div>
      <div className='depoiments'>
        <h5>Depoimentos</h5>
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
  )
}

export default Home


//props do card: fotoVeic 'src', marcaModelo, novoSemiNovo