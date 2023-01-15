import React from 'react'
import { useNavigate } from "react-router-dom";


function NavBar() {


    const navigate = useNavigate();

    const deleteItems=()=> {
      localStorage.clear();
      navigate("/Login");
    }



  return (
    <>
      <div class="py-16 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center">
            <div class="flex justify-between items-center w-full">
                
                <div class="flex flex-col justify-start items-start">
                <a
                  href="/"
                  className="flex items-center p-2 text-3xl font-normal text-[#15449c] rounded-lg bg-blue-300"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-red-700 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="text-blue-900 ml-3 font-bold font-[Poppin]">
                    Admin panel
                  </span>
                </a>
                </div>
                <div class="flex flex-col justify-center items-center">
                  <h1 className="text-[#15449c] ml-3 text-3xl font-bold font-[Poppin]">
                    Welcome Admin👋 !!
                  </h1>
                </div>
                <ul className="pt-4 mt-4 space-y-2 dark:border-blue-700">
              <li>
                <button
                onClick={deleteItems}
                  type="button"
                  className="flex items-center p-2 text-xl font-normal text-blue-900 rounded-lg transition duration-75 hover:bg-blue-300 "
                >
                  <span className="flex-shrink-0 text-2xl w-7 h-7 text-red-700 transition duration-75 bg-transparent group-hover:text-blue-900 dark:group-hover:text-white">
                    <ion-icon name="log-out"></ion-icon>
                  </span>
                  <span className="ml-3">Logout</span>
                </button>
              </li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar
