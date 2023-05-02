import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Myshopping from './Shopping/Myshopping';
import Signup from './Sign-up/Signup';
//import { createContext, useState } from 'react';
//const ProductContext=createContext();
function App() {
  
  //const [productitem,setProductitem]= useState([]);
  return (
    <div className="App">
        {/* <ProductContext.Provider value={[productitem,setProductitem]}> */}
     <BrowserRouter> 
     <Navbar />
    {/* <Signup /> */}
     <Routes>
     {/* <Route path="/myshopping" element={<Home title="popular movies" url={Myshopping}/>} /> */}
     <Route path='/myshopping' element={<Myshopping/>}></Route> 
     <Route path='/home' element={<Home/>}></Route> 
      <Route path='/signup' element={<Signup />}></Route> 
    </Routes>
    </BrowserRouter>
    {/* </ProductContext.Provider> */}
    </div>
  );
}

export default App;
//export {ProductContext};



