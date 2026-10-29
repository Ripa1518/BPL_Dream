
const Available = ({showSelectedPlayers,setShowSelectedPlayers,selectedNum}) => {
    return (
        <div className="mx-auto md:flex justify-between my-8 text-center">
            {
               showSelectedPlayers? (<h2 className="text-3xl font-bold items-center">Selected Players ({selectedNum}/6)</h2>):(<h2 className="text-3xl font-bold items-center ">Available Players</h2>) 
            }
            
            <div className="md:text-3xl text-center">

                <button onClick={()=>setShowSelectedPlayers(false)} className={`btn rounded-l-2xl rounded-r-none md:text-2xl h-14 ${showSelectedPlayers?"bg-white" : "bg-yellow-300"}`}>Available</button>
                <button  onClick={()=>setShowSelectedPlayers(true)} className={`btn rounded-l-none rounded-r-2xl md:text-2xl h-14  ${showSelectedPlayers?"bg-yellow-300" : " bg-white"}`}>Selected ( <span>{selectedNum} </span> )</button>
            </div>
        </div>
    );
};

export default Available ;