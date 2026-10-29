import bg from '../../assets/bg-shadow.png'
import banner from "../../assets/banner-main.png";
const Hero = ({handleFreaCredit}) => {
    return (
        // <div className='relative'>
        //     <img src={bg} className='bg-black w-full rounded-3xl ' alt="" />
        //     <img src={banner} className='absolute top-0 left-1/2 -translate-x-1/2 pt-12' alt="" />
        //     <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        // </div>
        <div className='bg-black bg-cover bg-center space-y-4 p-8' style={{backgroundImage: `url(${bg})`}}>
            <img src={banner} className='mx-auto  ' alt="" />
            <h2 className='text-4xl font-bold text-white text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <h4 className='text-white text-center text-2xl'>Beyond Boundaries Beyond Limits</h4>
            <div className='flex justify-center '>
                <button onClick={handleFreaCredit} className='btn bg-yellow-300 text-xl font-bold p-5 rounded-2xl outline-2 outline-amber-300 outline-offset-4'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;