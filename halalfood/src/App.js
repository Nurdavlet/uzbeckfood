import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentification from "./authentification/Authentification.jsx";
import Authors from "./authors/authors.jsx";
import { Main } from "./main/main.jsx";
import  Cookbook  from "./products/Cookbook.jsx";
function App() {
  return (
    
    <Routes>
      <Route  path='/' element={<Main/>} ></Route>
      <Route  path="/cookbook" element={<Cookbook/>} />    
      <Route  path="/authors"  element={<Authors />} />
      <Route path="/authentification" element={<Authentification/>}/>
      <Route  path="*" element={<h1>404</h1>}></Route>
    </Routes>


  );
}

export default App;
