import Navbar from "./Components/Navbar";
import "./App.css";
import Camera from "./Components/Products/Camera";
import AddToCartButton from "./Components/cartComponents/AddtoCartModal";
import AllComponents from "./Components/AllComponents";
import CartScreen from "./Components/CartScreen/CartScreen";
import CartAddress from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <AddToCartButton /> */}
      {/* <CartScreen /> */}
      {/* <AllComponents/> */}
      {/* <CartAddress /> */}
      <Payment/>
    </div>
  );
}

export default App;
