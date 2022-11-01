import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./main/main.d";

function App() {
  return (
    
    <Routes>
      <Route  path='/' element={<Main/>} >
        
      </Route>      
    </Routes>


  );
}

export default App;
