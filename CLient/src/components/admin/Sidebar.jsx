import { React } from "react";
// import { useNavigate } from "react-router-dom";

function Sidebar() {
  // const navigate = useNavigate();

  // const deleteItems=()=> {
  //   localStorage.clear();
  //   navigate("/Login");
  // }

  return (
    <div>
      <div className="h-full fixed">
        <aside className="w-64 h-full" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-blue-900 rounded h-full dark:bg-indigo-0 flex flex-col justify-between">
            <ul className="space-y-2">
              <li className="mt-4">
                <a
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-blue-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-blue-50 transition duration-75  group-hover:text-blue-50 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="text-blue-50 ml-3 uppercase font-bold font-[Poppin]">
                    Admin panel
                  </span>
                </a>
              </li>           
              <li>
                <a
                  href="/users"
                  className="flex items-center p-2 text-base font-normal text-blue-50 rounded-lg hover:text-blue-900 hover:bg-blue-100 dark:hover:bg-blue-700"
                >
               <span className="flex-shrink-0 text-2xl w-6 h-6 text-blue-50 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white">
               <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="/accounts"
                  className="flex items-center p-2 text-base font-normal text-blue-50 rounded-lg hover:text-blue-900 hover:bg-blue-100 dark:hover:bg-blue-700"
                >
                  <span className="flex-shrink-0 text-2xl w-6 h-6 text-blue-50 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white">
                  <ion-icon name="wallet-outline"></ion-icon>
                </span>
                  <span className="flex-1 ml-3 whitespace-nowrap">Accounts</span>
                </a>
              </li>
              <li>
                <a
                  href="/Cars"
                  className="flex items-center p-2 text-base font-normal text-blue-50 rounded-lg hover:text-blue-900 hover:bg-blue-100 dark:hover:bg-blue-700"
                >
                  <span className="flex-shrink-0 text-2xl w-6 h-6 text-blue-50 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white">
                    <ion-icon name="bus-outline"></ion-icon>
                  </span>

                  <span className="flex-1 ml-3 whitespace-nowrap">Cars</span>
                </a>
              </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-blue-200 dark:border-blue-700">
              <li>
                <button
                
                  type="button"
                  className="flex items-center p-2 text-base font-normal text-blue-50 rounded-lg transition duration-75 hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-white group"
                >
                  <span className="flex-shrink-0 text-2xl w-6 h-6 text-blue-50 transition duration-75 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-white">
                    <ion-icon name="log-out"></ion-icon>
                  </span>
                  <span className="ml-3">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
