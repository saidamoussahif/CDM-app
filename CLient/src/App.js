import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <>  
      <Routes>
      <Route className="App" path='/dashboard' element={<Dashboard/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
