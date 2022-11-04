import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./main/main.jsx";

let App = () => {
  let props = this.props;

  return (
    
    <Routes>
      <Route  path='/' element={<Main main = {props.app}/>} >
        
      </Route>      
    </Routes>


  );
}

export default App;
