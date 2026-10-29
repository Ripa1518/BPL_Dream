import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Hero from './components/Hero/Hero'
import Navber from './components/Navbar/Navber'
import Players from './components/Players/Players'
import SelectedPlayers from './components/Selected/SelectedPlayers'
import { ToastContainer , toast } from 'react-toastify';
import Footer from './components/Footer/Footer'
// import 'react-toastify/dist/index.css';

function App() {
  const [freeCredit,setFreeCredit] = useState(0)
  const [choosePlayers,setChoosePlayers] = useState([])
 
  const [showSelectedPlayers , setShowSelectedPlayers] = useState(false);
  const [selectedNum, setSelectedNum]= useState(0)


  const handleFreaCredit =() => {
    setFreeCredit(freeCredit + 1000000);
  }

  const handleChoosePlayer = (player) => {
      // console.log('clicked',id)
      // setChoosePlayers([...choosePlayers,player]);
        if(selectedNum>=6 ){
        toast.warn("You can't add more than 6 players");
        return;
      }

      if(choosePlayers.includes(player)){
        toast.error(`${player.name} has already been selected`);
        return;
      }

      if(freeCredit<player.price){
        toast.error("You don't have enough balance");
        return;
        
      }

      setChoosePlayers([...choosePlayers,player]);
      setFreeCredit(freeCredit - player.price);
      setSelectedNum(selectedNum+1);
      toast.success(`${player.name} has been added successfully `);
      
      
  }

  const removePlayers =(id,choosePlayer) =>{
        const remainingChoosePlayers = choosePlayers.filter(choosenPlayer => choosenPlayer.id !== id )
        setChoosePlayers(remainingChoosePlayers)
        setSelectedNum(selectedNum-1)
        toast.success(`${choosePlayer.name} has been removed successfully`);
        setFreeCredit(freeCredit + choosePlayer.price);
  }




  return (
    <>
      <div>
             <div className='mx-4 md:mx-10 lg:mx-24'>
      <Navber freeCredit={freeCredit}></Navber>
      <Hero handleFreaCredit={handleFreaCredit}></Hero> 

      <Available showSelectedPlayers={showSelectedPlayers} setShowSelectedPlayers={setShowSelectedPlayers} selectedNum={selectedNum}></Available>
      
      <div>
        {
          showSelectedPlayers?
           <SelectedPlayers choosePlayers={choosePlayers} setShowSelectedPlayers={setShowSelectedPlayers} removePlayers={removePlayers}></SelectedPlayers>
           :
           <Players handleChoosePlayer={handleChoosePlayer} ></Players>
        }
      </div>
      <ToastContainer position='top-center' autoClose='2000'></ToastContainer>
      </div>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
