import React from "react";
import icon from "../imgs/user-symbol.png";

function Login() {
  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div
          onclick="popuphandler(false)"
          className="w-full h-full bg-gray-50 z-0 absolute inset-0"
        />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-[#e9f4ff] rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-center">
                <p className="text-xl font-semibold text-[#113e6e]">
                Welcome back to your account!!
                </p>
              </div>
              <div className="px-4 md:px-10 pt-2 md:pt-8 md:pb-4 pb-4">
                <div className="flex items-center justify-center">
                  <div className="p-16 rounded-md flex items-center justify-center">
                    <img src={icon} alt="user" width={40} height={40} />
                  </div>
                </div>
                <form className="mt-5">
                  <div className="flex items-center justify-center ">
                    <input
                      placeholder="Email"
                      type="email"
                      className="w-3/4 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                  <div className="flex items-center justify-center  mt-8">
                    <input
                      placeholder="Password"
                      type="text"
                      min={0}
                      className="w-3/4 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                </form>
                <div className="flex justify-between mt-9">
                  <a
                    href="/register"
                    className="flex items-start justify-start py-3 text-indigo-600 underline hover:bg-opacity-80 text-sm"
                  >
                    Don't have an account?
                  </a>
                  <button className="flex items-center justify-center px-6 py-3 bg-[#113e6e] hover:bg-opacity-80 shadow rounded text-sm text-white">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
