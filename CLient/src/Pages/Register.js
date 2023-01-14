import { React } from "react";
import icon from "../imgs/user-symbol.png";
// import axios from "axios";
// import Error from '../components/Error'
// import Loader from "../components/Loader";

function Register() {
  // const [fullname, setFullname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [cin, setCin] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // Password toggle handler

  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-indigo-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-center">
                <p className="text-xl font-semibold text-indigo-500">
                  Create your account
                </p>
              </div>
              <div className="px-4 md:px-10 pt-2 md:pt-8 md:pb-4 pb-4">
                <div className="flex items-center justify-center">
                  <div className="p-16 rounded-md flex items-center justify-center">
                    <img src={icon} alt="user" width={40} height={40} />
                  </div>
                </div>
                <form className="mt-8">
                  <div className="flex items-center space-x-9">
                    <input
                      placeholder="Full Name"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      type="text"
                      name="fullname"
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      placeholder="Phone"
                      type="number"
                      min={0}
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      name="phone"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-9 mt-8">
                    <input
                      placeholder="CIN"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      type="text"
                      name="cin"
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      placeholder="Adress"
                      type="text"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      name="adress"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-9 mt-8">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      required
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      required
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
                  </div>
                </form>
                <div className="flex justify-between mt-9">
                  <a
                    href="/login"
                    className="flex items-start justify-start py-3 text-indigo-600 underline hover:bg-opacity-80  text-sm"
                  >
                    Already have an account!
                  </a>
                  <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Submit
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

export default Register;
