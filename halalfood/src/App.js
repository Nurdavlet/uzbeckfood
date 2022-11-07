import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./main/main.jsx";
import  Cookbook  from "./products/Cookbook.jsx";
function App() {
  return (
    
    <Routes>
      <Route  path='/' element={<Main/>} ></Route>
      <Route  path="/cookbook" element={<Cookbook/>} />      
    </Routes>


  );
}

export default App;
