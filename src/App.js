import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Navbar from "./pages/Navbar";
import Login from "./user/Login";
import { useDispatch } from "react-redux";
import { loadUser } from "./action/user";
import Cart from "./pages/Cart";
import Signup from './user/SignUp'
import Query from "./pages/Query";

function App() {
const dispatch = useDispatch()
  useEffect(()=>{
dispatch(loadUser())
  },[])
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<>
      <Navbar/>
      <Home/>
      </> 
      }/>
      <Route path="/checkout" element={<>
      <Navbar/>
      <Checkout/>
      </>} />
      <Route path="/login" element={<>
      <Navbar/>
      <Login/>
      </>} />
      <Route path="/signup" element={<>
      <Navbar/>
      <Signup/>
      </>} />
      <Route path="/cart" element={<>
      <Navbar/>
      <Cart/>
      </>} />
      <Route path="/query" element={<>
      <Query/>
      </>} />
     </Routes>

    </div>
  );
}

export default App;
