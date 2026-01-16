import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import ProtectedRoute  from "./ProtectedRoute/ProtectedRoute.jsx";


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      </Routes>
    </div>
  );
};

export default App;
