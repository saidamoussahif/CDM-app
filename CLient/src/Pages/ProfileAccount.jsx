import { useState, useEffect } from "react";
import logo from "../imgs/user-profile.png";
import { useNavigate } from "react-router";
import axios from "axios";

const ProfileAccount = () => {
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const fullname = localStorage.getItem("user_fullname");

  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };
  //  get user data from localstorage

  useEffect(() => {
    const getUserById = async () => {
      const token = localStorage.getItem("userToken");

      const response = await axios.get(
        "http://localhost:8000/api/users/get-user-by-id",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data);
    };
    getUserById();
    isset(token);
  }, []);

  const deleteItems = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
    <>
      <div className="absolute bg-gray-50 w-full h-full">
        {/* Navigation starts */}
        <nav className="w-full mx-auto bg-white shadow">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">
                <h3 className="text-base text-gray-800 felx justify-center items-center font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                  Welcome {`${fullname}`} 👋 To Your Account!!
                </h3>
              </div>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full flex">
                  <div
                    aria-haspopup="true"
                    className="cursor-pointer w-full flex items-center justify-end relative"
                    onClick={() => setProfile(!profile)}
                  >
                    <img src={logo} alt="logo" height={60} width={60} />
                    <span className="text-gray-800 text-sm ml-2">Jane Doe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navigation ends */}
        {/* Page title starts */}
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-[#16519e]">
              User Profile
            </h4>
          </div>
          <div className="mt-6 lg:mt-0">
            <button
              onClick={deleteItems}
              className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm"
            >
              Logout
            </button>
            <button className="transition duration-150 ease-in-out hover:bg-[#397fda] focus:outline-none border bg-[#16519e] rounded text-white px-8 py-2 text-sm">
              Edit Profile
            </button>
          </div>
        </div>
        {/* Page title ends */}
        <div className="container mx-auto px-6">
          <div className="w-full h-64 rounded border-dashed border-2 border-gray-300">
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="h-16 w-full text-sm leading-none text-gray-800">
                    <th className="font-normal text-left pl-4">User ID</th>
                    <th className="font-normal text-left pl-4">Fullname</th>
                    <th className="font-normal text-left pl-4">Phone</th>
                    <th className="font-normal text-left pl-4">Adress</th>
                    <th className="font-normal text-left pl-12">CIN</th>
                    <th className="font-normal text-left pl-12">Email</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">
                      <p className="font-medium">{userData._id}</p>
                    </td>
                    <td className="pl-4 cursor-pointer">
                      <p className="font-medium">{userData.fullname}</p>
                    </td>
                    <td className="pl-4 cursor-pointer">
                      <p className="font-medium">{userData.phone}</p>
                    </td>
                    <td className="pl-4 cursor-pointer">
                      <p className="font-medium">{userData.address}</p>
                    </td>
                    <td className="pl-4 cursor-pointer">
                      <p className="font-medium">{userData.cin}</p>
                    </td>
                    <td className="pl-4 cursor-pointer">
                      <p className="font-medium">{userData.email}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex justify-end items-end p-2 text-xl m-56 font-normal text-blue-900 rounded-lg transition duration-75 hover:bg-blue-300"
        >
          <span className="flex-shrink-0 text-2xl w-7 h-7 text-red-700 transition duration-75 bg-transparent group-hover:text-blue-900 dark:group-hover:text-white">
            <ion-icon name="cloud-download-outline"></ion-icon>
          </span>
          <span className="ml-3">Download</span>
        </button>
      </div>
    </>
  );
};
export default ProfileAccount;
