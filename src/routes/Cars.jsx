import CardExample from '../components/Card'
import './Cars.css'

const Cars = () => {
  return (
    <div className='cars'>
        <h2>Nosso Estoque</h2>
        <div className='cars_list'>
          <ul className='cars_ul'>
            <li className='cars_li'><CardExample /></li>
          </ul>
        </div>
    </div>
  )
}

export default Cars


//props do card: fotoVeic 'src', marcaModelo, novoSemiNovo