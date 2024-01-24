import {Routes,Route} from 'react-router-dom'
import './App.css'
import Button from './components/Button/button.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Astros from './components/Astros/Astros.jsx'
import BottomNav from './components/BottomNav/BottomNav.jsx'
import MyCard from './components/About/mycard.jsx'
function App(){
  const btnText = 'login'

  const links=[
    {id:1, name:'Home',href:'/'},
    {id:2, name:'About',href:'/about'},
    {id:3, name:'Astros', href:'/astros'},
  ]
  return(
    <>
      <Navbar links={links} />
      <Routes>
        <Route 
        path='/'
        element={<Button name={btnText}/>}
        />
        <Route 
        path='/about'
        element={<MyCard/>}
        />
        <Route
        path='/astros'
        element={<Astros/>}
        />
      </Routes>
      {/* <Astros />
      <Button name={btnText} />
      <BottomNav /> se eliminaron porque se sustituyeron arriba con route*/} 

    </>   
  )
}

export default App
