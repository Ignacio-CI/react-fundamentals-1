const Button = ({ text }) => {
    const handleClick = (title) => {
      console.log('click' + title)
    };  
    return <button onClick={() => handleClick(text)}>{text}</button>;
};

export default Button;