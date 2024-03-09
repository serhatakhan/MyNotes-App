import React, {useState} from 'react';
import MyContext from './index';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('ikinci sayfa');

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeText = (text) => {
    setText(text);
  };

  return (
    <MyContext.Provider value={{count, changeCount, text, changeText}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider
