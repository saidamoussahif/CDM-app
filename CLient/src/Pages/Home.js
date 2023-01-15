import { React, useState } from "react";
import MyBackgroundImage from "../imgs/coming-soon.png";
import image from "../imgs/bank.png";
import Header from "../components/Header";
import merveilleuse from "../imgs/merveilleuse.png";
import biognach from "../imgs/biognach.png";
import bpec from "../imgs/bpec.png";
import british from "../imgs/british-logo.png";
import institut from "../imgs/institut-fr-logo.png";
import pimkie from "../imgs/pimkie.png";
import { useNavigate } from "react-router";
import axios from "axios";
// import Footer from "../components/Footer";

const Home = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const token = localStorage.getItem("userToken");

  const [agence, setAgence] = useState("");
  const [solde, setSolde] = useState(0);

  const navigate = useNavigate();

  const onChange = (e) => {
    setAgence(e.target.value);
    setSolde(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const res = axios.post(
      "http://localhost:8000/api/accounts/createAccount",
      {
        agence,
        solde,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
  };

  // check user is logged in for create account
  const createAccount = () => {
    if (!token) {
      // navigate("/login");
      alert("please log in");
    } else {
      // call function onSubmit
      onSubmit();
      // navigate("/profile");
    }
  };

  return (
    <>
      <Header />

      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${MyBackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="w-full h-screen flex flex-col items-center justify-between bg-blue-900 bg-opacity-70 py-8">
          <div className="flex-1 flex flex-col items-center justify-center">
            <section className="px-6 xl:px-0">
              <div className="mx-auto container">
                <div className="flex flex-col lg:items-center justify-center w-full">
                  <h1 className="font-semibold text-gray-50 text-3xl md:text-4xl">
                    The Right Plan for your business
                  </h1>
                  <p className="mt-2.5 lg:w-1/2 lg:text-center text-gray-50 text-2xl">
                    We have several plans to showcase your Business. Get
                    everything you need
                  </p>
                </div>
                <div className="flex items-center justify-center bg-[#113e6e] bg-transparent text-white border border-white w-32 p-2 rounded-md ml-80 mt-6 ">
                  <button onClick={() => setShowModalAdd(true)}>
                    Get Started
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-96">
            <div className="w-full lg:w-6/12">
              <h2 className="w-full font-bold lg:text-4xl text-[#15449c] text-3xl lg:leading-10 leading-9 mt-20">
                We are here to make great design accessible and delightfull for
                everyone
              </h2>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.In the first place we have
                granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and
                shall have her rights entire,
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <img src={image} alt="bank" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-4 mt-6">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 md:leading-7 lg:leading-9 text-[#15449c]">
            Our Services
          </h1>
        </div>

        <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
            {/* Safe Shopping Grid Card */}
            <div className=" p-6 bg-gray-50 hover:bg-gray-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 3H13M12 7V3V7Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.6569 4.92871L19.0711 6.34292M15.5355 8.46424L18.364 5.63582L15.5355 8.46424Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 11V13M17 12H21H17Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.071 17.6572L17.6568 19.0714M15.5355 15.5359L18.3639 18.3643L15.5355 15.5359Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 21H11M12 17V21V17Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.34314 19.0713L4.92893 17.6571M8.46446 15.5358L5.63603 18.3642L8.46446 15.5358Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 13L3 11M7 12H3H7Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.92896 6.34277L6.34317 4.92856M8.46449 8.46409L5.63606 5.63567L8.46449 8.46409Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
                Safe Shopping
              </p>
              <p className=" font-normal text-base leading-6 text-gray-600 my-4">
                Our all outlets have industry-leading health precautions
              </p>
              <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
                Learn More
              </a>
            </div>

            {/* Personal Shopping Grid Card */}
            <div className=" p-6 bg-gray-50 hover:bg-gray-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21H21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7V8C3 8.79565 3.31607 9.55871 3.87868 10.1213C4.44129 10.6839 5.20435 11 6 11C6.79565 11 7.55871 10.6839 8.12132 10.1213C8.68393 9.55871 9 7.79565 9 7M3 7H9M3 7H21M3 7L5 3H19L21 7M9 7C9 7.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8M9 7H15V8M15 8C15 8.79565 15.3161 9.55871 15.8787 10.1213C16.4413 10.6839 17.2044 11 18 11C18.7956 11 19.5587 10.6839 20.1213 10.1213C20.6839 9.55871 21 8.79565 21 8V7"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 20.9996V10.8496"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 20.9996V10.8496"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
                Personal Shopping
              </p>
              <p className=" font-normal text-base leading-6 text-gray-600 my-4">
                Contact your local outlet to book a personal appointment
              </p>
              <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
                Learn More
              </a>
            </div>

            {/* Free Shopping Grid Card */}
            <div className=" p-6 bg-gray-50 hover:bg-gray-200">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M18.4142 12.7573L21.2426 9.92886C21.6177 9.55378 22.1264 9.34307 22.6568 9.34307C23.1873 9.34307 23.696 9.55378 24.071 9.92886C24.4461 10.3039 24.6568 10.8126 24.6568 11.3431C24.6568 11.8735 24.4461 12.3822 24.071 12.7573L21.2426 15.5857L23.3639 23.3639L21.2426 25.4852L17.7071 19.1212L14.8786 21.9497V24.7781L12.7573 26.8994L11.3431 22.6568L7.10048 21.2426L9.2218 19.1212H12.0502L14.8786 16.2928L8.51469 12.7573L10.636 10.636L18.4142 12.7573Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.0294189 17) rotate(-45)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
                Free Shipping
              </p>
              <p className=" font-normal text-base leading-6 text-gray-600 my-4">
                Free shipping all over the world on orders above $100
              </p>
              <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 mt-12">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 md:leading-7 lg:leading-9 text-[#15449c]">
                Our Trusted Partners
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3  justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-12">
              <div className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 hover:bg-gray-200 flex justify-center items-center flex-col text-center py-14 px-12 ">
                <img src={merveilleuse} width="200" height="100" alt="bank" />
              </div>
              <div className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 hover:bg-gray-200 flex justify-center items-center flex-col text-center py-14 px-12 ">
                <img src={biognach} width="200" height="100" alt="bank" />
              </div>
              <div className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 hover:bg-gray-200 flex justify-center items-center flex-col text-center py-14 px-12 ">
                <img src={bpec} width="200" height="100" alt="banque" />
              </div>
              <div className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 hover:bg-gray-200 flex justify-center items-center flex-col text-center py-14 px-12 ">
                <img src={british} width="200" height="100" alt="about" />
              </div>
              <div className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 hover:bg-gray-200 flex justify-center items-center flex-col text-center py-14 px-12 ">
                <img src={institut} width="200" height="100" alt="bank" />
              </div>
              <div className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 hover:bg-gray-200 flex justify-center items-center flex-col text-center py-14 px-12 ">
                <img src={pimkie} width="200" height="100" alt="about banque" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModalAdd ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-900 bg-opacity-40 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    Create Your Account
                  </h3>
                  <button
                    className="bg-transparent border-0 text-[#16519e] float-right"
                    onClick={() => setShowModalAdd(false)}
                  >
                    <span className="text-red-600 font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={onSubmit}
                    className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8
                    w-full"
                  >
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Agency
                    </label>
                    <select
                      name="agence"
                      onChange={onChange}
                      required
                      className="shadow appearance-none border rounded w-full p-3 px-1 block text-blue-900 text-base mb-1"
                    >
                      <option selected>Choose your agency</option>
                      <option value="1">Agency Safi plateau</option>
                      <option value="2">Agency Boulevard Rabat</option>
                      <option value="3">Agency Jeraifate</option>
                    </select>
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Amount
                    </label>
                    <input
                      type="number"
                      onChange={onChange}
                      defaultValue={0}
                      name="solde"
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    onClick={onSubmit}
                    className="text-blue-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
