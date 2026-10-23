import logo from "../../assets/logo.png";
import coin from '../../assets/icons8-coins-64.png';
const Navber = () => {
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Fixure</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
      
    </div>
    
    <img src={logo} alt="" />
    
  </div>
  <div className="navbar-end  lg:flex">
    <ul className="menu menu-horizontal  hidden lg:flex  lg:text-2xl text-gray-500">
      <li><a>Home</a></li>
      <li><a>Fixure</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-3xl rounded-2xl"><span>0</span> Coin <img className="w-8" src={coin} alt="" /></button>
  </div>
</div>
    );
};

export default Navber;