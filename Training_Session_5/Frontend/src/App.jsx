import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import CartProvider from "./components/Cart/cartContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />}></Route>
            {/* <Route path='/checkout' element={< Checkout/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
