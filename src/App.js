import classes from "./App.module.css"

import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <img className={classes['background-image']} src={require("./images/header-photo.jpg")}></img>
    </div>
  );
}

export default App;
