
const Available = () => {
    return (
        <div className="flex justify-between my-8">
            <h2 className="text-3xl font-bold items-center">Available Players</h2>
            <div className="text-3xl">
                <button className="btn rounded-l-2xl rounded-r-none text-2xl h-14">Available</button>
                <button className="btn rounded-l-none rounded-r-2xl text-2xl h-14">Selected ( <span>0 </span> )</button>
            </div>
        </div>
    );
};

export default Available;