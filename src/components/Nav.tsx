import LOGO from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm pb-3">
        <div className=" flex justify-between container mx-auto ">
          <img src={LOGO} className=' h-[35px]  mt-5 ' />
          <div>
            <ul>
              <li className=" flex justify-between  gap-5 mt-7  items-center" >
                <p className="text-pink-500 font-semibold">Home</p>
                <p>Technologies</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
              </li>
            </ul>
          </div>
          <div className=" flex justify-between  gap-5 mt-5  items-center">
            <p>Sign In</p>
            <button className=" bg-pink-600 rounded-3xl px-3 py-1 text-white hover:bg-pink-700 hover:scale-105 transition-all duration-300">Sign Up</button>
          </div>
        </div>
      </nav>
  );
};

export default Nav;