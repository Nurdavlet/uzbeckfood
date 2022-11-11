import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authors from "./authors/authors.jsx";
import { Main } from "./main/main.jsx";
import  Cookbook  from "./products/Cookbook.jsx";
function App() {
  return (
    
    <Routes>
      <Route  path='/' element={<Main/>} ></Route>
      <Route  path="/cookbook" element={<Cookbook/>} />    
      <Route  path="/authors"  element={<Authors />} />
    </Routes>


  );
}

export default App;
