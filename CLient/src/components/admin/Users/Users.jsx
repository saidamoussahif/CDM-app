import React from "react";
import Sidebar from "../Sidebar";

function Users() {

  return (
    <div className="flex">
    <Sidebar/>
             <div className="w-1/2 sm:px-6 absolute top-1/4 left-1/4">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Users</p>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">Fullname</th>
                                <th className="font-normal text-left pl-12">Phone</th>
                                <th className="font-normal text-left pl-12">Adress</th>
                                <th className="font-normal text-left pl-12">CIN</th>
                                <th className="font-normal text-left pl-12">Email</th>
                               
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <p className="font-medium">John Doe</p>
                                </td>
                            </tr>                          
                        </tbody>
                    </table>
                </div>
            </div>
  



    </div>
  )
}

export default Users