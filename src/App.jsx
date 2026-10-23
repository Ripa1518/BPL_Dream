import './App.css'
import Available from './components/Available/Available'
import Hero from './components/Hero/Hero'
import Navber from './components/Navbar/Navber'
import Players from './components/Players/Players'

function App() {
  

  return (
    <>
     <div className='mx-4 md:mx-10 lg:mx-24'>
      <Navber></Navber>
      <Hero></Hero>
      <Available></Available>
      <Players></Players>
     </div>
    </>
  )
}

export default App
