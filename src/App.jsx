import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";


const App = () => {
  
  // const navigate = useNavigate()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
