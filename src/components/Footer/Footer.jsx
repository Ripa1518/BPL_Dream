import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='relative mt-48 md:mt-80 '>
            {/* //Newsletter */}
            <div className='absolute bg-linear-to-tr from-blue-200 via-white to-orange-200 p-4 md:p-24 left-1/2 -top-32 md:-top-42 -translate-x-1/2 rounded-4xl text-center space-y-4 outline-2 outline-offset-4 md:outline-offset-12 outline-orange-300 w-11/12 lg:w-1/2'>
                <h2 className="md:text-4xl font-bold">Subscribe to our Newsletter</h2>
                <h4 className="md:text-2xl text-gray-500">Get the latest updates and news right in your inbox!</h4>
                <div className='md:flex space-y-3 md:gap-4'>
                    <input type="email" className="input mr-4 w-full" placeholder="Enter your Email" />
                    <button className="btn bg-linear-to-r from-pink-200 via-white to-blue-200 ">Subscribe</button>
                </div>
            </div>
            {/* //black bottom */}
            <div className="bg-black">
                <div className='pt-32 md:pt-68 lg:pt-70 flex justify-center '>
                    <img src={logo} alt="" className='w-32 lg:w-42' />
                </div>
                {/* bottom text */}
                <div className='text-white flex mx-4  lg:mx-24 flex-col justify-center md:flex-row lg:justify-between mt-8 gap-4 p-4'>

                    <div className='md:w-1/3 space-y-4'>
                        <h3 className='text-2xl'>About Us</h3>
                        <h4  className='text-xl text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</h4>
                    </div>

                    <div className='space-y-4 '>
                        <h3 className='text-2xl space-y-4'>Quick Links</h3>
                        <ul  className='text-xl text-gray-400 space-y-2'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    <div className='space-y-4 md:w-1/3'>
                        <h3 className='text-2xl'>Subscribe</h3>
                        <h4  className='text-xl text-gray-400'>Subscribe to our newsletter for the latest updates.</h4>
                       <div className='flex'>
                         <input type="email" className="input  rounded-l-2xl rounded-r-none md:text-2xl h-14 text-gray-800" placeholder="Enter your Email" ></input>
                        <button className='rounded-l-none rounded-r-2xl md:text-2xl h-14  bg-linear-to-r from-pink-200 via-white to-orange-200 text-black font-bold p-2 px-6'>Subscribe</button>
                       </div>
                    </div>
                </div>
                <hr className='border-gray-700'></hr>
                <h3 className='text-gray-400 text-center py-8'>@2024 Your Company All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;