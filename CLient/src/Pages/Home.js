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
// import Footer from "../components/Footer";

const Home = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  // check user is logged in for create account
  const createAccount = () => {
    if (!token) {
      // navigate("/login");
      console.log("not logged in");
    } else {
      navigate("/profile");
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

        <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 mt-32">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 md:leading-7 lg:leading-9 text-[#15449c]">
                Our Trusted Partners
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3  justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-24">
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
                  <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Agency
                    </label>

                    <select className="shadow appearance-none border rounded w-full p-3 px-1 block text-blue-900 text-base mb-1">
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
                      defaultValue={0}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    onClick={createAccount}
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
