import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Accounts from "./components/admin/Accounts/Accounts";
import Users from "./components/admin/Users/Users";
import About from './Pages/About';


function App() {
  return (
    <>  
      <Routes>
      <Route className="App" path='/dashboard' element={<Dashboard/>}/>
        <Route path="/accounts"  element={<Accounts/>}/>
        <Route path="/users"  element={<Users/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
