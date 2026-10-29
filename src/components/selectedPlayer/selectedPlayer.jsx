import { IoTrashBinOutline } from "react-icons/io5";
const choosePlayer = ({choosePlayer,removePlayers}) => {
    const {id,image,name,battingStyle} = choosePlayer;
    return (
        <div className="border border-gray-300 rounded-2xl md:p-6 flex justify-between items-center gap-8">
            <div className="flex gap-4 items-center">
            <img className="w-30 h-30 object-cover" src={image}  alt="" />
            
                <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                <h4 className="text-gray-500">{battingStyle}</h4>
                </div>
            </div>
            <div><IoTrashBinOutline className="text-5xl text-red-500" onClick={()=>removePlayers(id,choosePlayer)} /></div>
        </div>
    );
};

export default choosePlayer;