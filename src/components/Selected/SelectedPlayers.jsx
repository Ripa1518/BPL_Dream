import SelectedPlayer from '../selectedPlayer/selectedPlayer'
const SelectedPlayers = ({choosePlayers,setShowSelectedPlayers,removePlayers}) => {
    return (
        <div className='space-y-4'>
            {
            choosePlayers.map(choosePlayer => <SelectedPlayer choosePlayer={choosePlayer} removePlayers={removePlayers}></SelectedPlayer> )
            }
            <div className='text-center md:text-left'><button onClick={()=>setShowSelectedPlayers(false)} className='btn bg-yellow-300 rounded-2xl md:text-2xl md:p-6 outline-2 md:outline-offset-6 md:font-bold '>Add More Player</button></div>
            
        </div>
    );
};

export default SelectedPlayers;