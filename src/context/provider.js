import React, {useState} from 'react';
import MyContext from './index';
import { Alert } from 'react-native';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('ikinci sayfa');
  const [notes, setNotes] = useState([{
    id: 1,
    title: 'MVC Patern',
    description: 'Bu birinci notun açıklama yazısıdır.',
    date: '12:25',
    read: false
  },
  {
    id: 2,
    title: 'Native Stack Navigator',
    description: 'Bu ikinci notun açıklama yazısıdır.',
    date: '14:25',
    read: false
  },
  {
    id: 3,
    title: 'Bottom Tabs',
    description: 'Bu üçüncü notun açıklama yazısıdır.',
    date: '16:00',
    read: false
  },
  {
    id: 4,
    title: 'Native Context API',
    description: 'Bu dördüncü notun açıklama yazısıdır.',
    date: '19:45',
    read: false
  }])

  const addNote = (item)=>{
    if(item){
      setNotes([...notes, item])
      Alert.alert("Not Eklendi")
    }
  }

  const deleteNote = (id)=>{
    if(id){
      const updatedItems = notes.filter((item)=> item.id !== id.id)
      setNotes(updatedItems)
      Alert.alert("Not Silindi")
    } else {
      Alert.alert("Not Silindi")
    }
  }

  const updateNote = (id, item)=>{
    const updatedItems = notes.map((note)=> note.id === id ? {...note, title: item.title, description: item.description, read: true, date: "20:30"} : note)
    setNotes(updatedItems)
    // Alert.alert("Not Güncellendi")
  }

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeText = (text) => {
    setText(text);
  };

  return (
    <MyContext.Provider value={{count, changeCount, text, changeText, notes, setNotes, addNote, updateNote, deleteNote}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider
