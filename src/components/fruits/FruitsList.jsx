import FruitItem from "./FruitItem";

const FruitsList = ({ fruits }) => {
    //const fruits = ["🍌", "🍎", "🍍", "🥝"];

    return <ul>
    {fruits.map((fruit, index) => (
      <FruitItem key={index} fruit={fruit} />
    ))}
  </ul>
};

export default FruitsList;