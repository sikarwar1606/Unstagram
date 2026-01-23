import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Reels from "./Components/Reels/ReelPage.jsx"
import ProtectedRoute  from "./ProtectedRoute/ProtectedRoute.jsx";


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/reels" element={<ProtectedRoute><Reels/></ProtectedRoute>}/>
      </Routes>
    </div>
  );
};

export default App;
