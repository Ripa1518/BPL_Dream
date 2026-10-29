
const Player = ({player,handleChoosePlayer}) => {
    const {image,name,country,role,battingStyle , price} = player
    return (
        <div className="card bg-base-100 shadow-xl md:px-10">
  <figure className=" pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-full h-80 object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <div className="flex justify-between items-center">
      <h3>{country}</h3>
      <h3 className="bg-gray-300 px-4 py-1 rounded-xl">{role}</h3>
      
    </div>
    <hr className="text-gray-400"></hr>
    <h2 className="text-xl font-bold">Rating</h2>
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-md">{battingStyle}</h3>
      <h3 className="text-gray-400 text-md">{battingStyle}</h3>
    </div>
    <div className="card-actions flex justify-between items-center">
      <h2 className="font-bold text-md">Price : {price}</h2>
      <button onClick={()=> handleChoosePlayer(player)} className="btn border border-yellow-300 rounded-2xl font-bold text-md">Choose player</button>
    </div>
  </div>
</div>
    );
};

export default Player;