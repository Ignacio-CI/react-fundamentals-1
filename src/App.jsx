import { Fragment } from "react";
import imageOne from "./assets/images/img1.jpg";
import Button from "./components/Button";
import FruitsList from "./components/fruits/FruitsList";
import WelcomeText from "./components/WelcomeText";
import ButtonState from "./components/ButtonState";

const App = () => {
  const title = "My title";
  const titleClass = "text-center";
  const user = true;
  const fruits = ["🍌", "🍎", "🍍", "🥝", "🍇"];

  return (
    <Fragment>
      <ButtonState />
      <h1 className={titleClass}>{title.toUpperCase()}</h1>
      <img src={imageOne}></img>
      <Button text="button 1" />
      <Button text="button 2" />
      <Button text="button 3" />
      <Button text="button 4" />
      {<WelcomeText user={user} />}
       
      <FruitsList fruits={fruits}/>      
    </Fragment>
  );
};

export default App;
