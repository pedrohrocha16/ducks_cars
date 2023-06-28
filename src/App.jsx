import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
