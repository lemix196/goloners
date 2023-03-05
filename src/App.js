import classes from "./App.module.css";

import Navbar from "./components/UI/Navbar";
import Card from "./components/UI/Card";
import MenuCard from "./components/UI/MenuCard";
import CartModal from "./components/Cart/CartModal";

function App() {
  return (
    <div>
      <Navbar />
      {/*<CartModal></CartModal>*/}
      <img
        className={classes["background-image"]}
        src={require("./images/header-photo.jpg")}
      ></img>
      <Card>
        <h2>Delicious meal at your door</h2>
        <p>
          We serve all kinds of pork knuckle, called in Poland as "golonka".
          Pick your favourite kind, order and we will deliver it to you.
        </p>
        <p>
          We use only finest and natural meat, straight from local breeders.
        </p>
      </Card>
      <MenuCard></MenuCard>
    </div>
  );
}

export default App;
