import Carrosel from '../components/Carrosel'
import Footer from '../components/Footer'
import './Home.css'

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
    </div>
  )
}

export default Home