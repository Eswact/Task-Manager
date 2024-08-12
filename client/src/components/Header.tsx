import React, {useEffect} from "react";
import { Link, useLocation, Location, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNavbar } from "../scripts/common";

const Header: React.FC = () => {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const exit = () => {
    logout();
    navigate('/login');
  };

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  useEffect(() => {
    const darkModeEnabled = document.body.classList.contains('dark');
    (document.querySelector('.theme-controller') as HTMLInputElement).checked = darkModeEnabled;
  }, []);

  return (
    <header className="w-[calc(100%-80px)] md:w-full fixed top-0 left-[80px] md:left-0 h-[90px] bg-[#F5F5F5] dark:bg-dark justify-center items-center px-[50px] pt-[25px] md:px-[20px]">
      <nav className="w-full h-full px-[40px] md:px-[20px] py-[4px] flex items-center justify-between border-[1px] border-main bg-[#364F6B3e] rounded-md dark:border-[rgba(255,255,255,0.75)] ">
        <div className="flex items-center">
          <button onClick={showNavbar} className="hidden md:block text-main hover:text-second dark:text-white dark:hover:text-second text-[1.5rem] px-[4px]"><FontAwesomeIcon icon={["fas", "bars"]}/></button>
        </div>
        <div className="flex gap-[40px] md:gap-[20px] items-center justify-end">
          {/* darkmode toggle */}
          <label className="swap swap-rotate cursor-pointer px-[2px]">
            <input type="checkbox" onChange={handleDarkModeToggle} className="theme-controller" />
            <svg className="swap-off h-[32px] w-[32px] fill-current text-main hover:text-second dark:text-white dark:hover:text-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-on h-[32px] w-[32px] fill-current text-main hover:text-second dark:text-white dark:hover:text-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {/* settings button */}
          <button className="text-main hover:text-second dark:text-white dark:hover:text-second text-[1.5rem] px-[4px]"><FontAwesomeIcon icon={["fas", "gear"]}/></button>
          {/* logout button */}
          <button onClick={exit} className="text-main hover:text-second dark:text-white dark:hover:text-second text-[1.5rem] px-[4px]"><FontAwesomeIcon icon={["fas", "arrow-right-from-bracket"]}/></button>
        </div>
      </nav>
    </header>
  );
};
                                                                                            
export default Header;
