import React from "react";
import Greetings from "./components/Greetings";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h1>Welcome to our store</h1>
      <Greetings name="Sunny Man" />
      <h2>Products</h2>
      <Products name="Carolina Herrera Cobalt" price="$100" />
      <Products name="JPG " price="$120" />
      <Products name="Dior" price="$150" />
      <Products name="Chanel" price="$200" />
    </div>
  );
}
export default App;