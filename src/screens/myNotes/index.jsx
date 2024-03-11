import React, {Component, useState, useEffect, useContext} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import { ADDNOTE } from '../../utils/routes';
import MyContext from '../../context';

// navigationı okumak için prop olarak {navigation}'ı aldık. navigators dersinden hatırla!! butona basınca addNote sayfasına gideceğiz
const MyNotes = ( {navigation} ) => {
  const {notes, setNotes} = useContext(MyContext)

  // const [notes, setNotes] = useState([{
  //   id: 1,
  //   title: 'MVC Patern',
  //   description: 'Bu birinci notun açıklama yazısıdır.',
  //   date: '12:25 pm',
  // },
  // {
  //   id: 2,
  //   title: 'Native Stack Navigator',
  //   description: 'Bu ikinci notun açıklama yazısıdır.',
  //   date: '14:25 pm',
  // },
  // {
  //   id: 3,
  //   title: 'Bottom Tabs',
  //   description: 'Bu üçüncü notun açıklama yazısıdır.',
  //   date: '16:00 pm',
  // },
  // {
  //   id: 4,
  //   title: 'Native Getir Clone',
  //   description: 'Bu dördüncü notun açıklama yazısıdır.',
  //   date: '19:45 pm',
  // }])


  // const addNote = (item)=>{
  //   if(item){
  //     setNotes([...notes, item])
  //   }
  // }

  // const deleteNote = (id)=>{
  //   if(id){
  //     const updatedItems = notes.filter((item)=> item.id !== id.id)
  //     setNotes(updatedItems)
  //   } else {
  //     Alert.alert("Not Bulunamadı :/")
  //   }
  // }

  // const updateNote = (id, item)=>{
  //   const updatedItems = notes.map((note)=> note.id === id ? {...note, title: item.title} : note)
  //   setNotes(updatedItems)
  // }


  /*
    useEffect(()=>{
    setTimeout(() => {
      setNotes([...notes, note3])
    }, 2000);
  }, [])
  */


  // bütün alanı kaplaması için flex:1 verdik. yoksa görünmüyordu içindeki elemanlar
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />

        {/* ScrollView içine aldık çünkü, bunlar sayfada alt alta dizildiğinde çok veri olduğunda scroll edilebilir bir alan olmazsa kaybolurlar 
        ekranın bittiği yerden sonra görünmezler. o yüzden scroll edilebilir bir alan oluşturmamız gerekiyor. */}
        {/** AMA BİZ SCROLLVIEW YERİNE FLATLIST KULLANACAĞIZ **
         * scrollview virtuallist şeklinde çalışan bir component DEĞİL. altta kalan görünmeyenleride render ediyor, içerdiği tüm öğeleri bir arada render eder.
         * flatlist ise virtuallist bir componenttir. altta kalan, görünmeyen itemları gereksiz render etmiyor. flatlist sadece ekrandakileri yansıtır. flatlist performans olarak çok daha iyi. **/}
        {/* kullanım şekli aşağıdaki gibi. react native dökümanından aldık */}
        <FlatList
          data={notes}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />

         {/* burada butona onPress adında prop gönderdik. normal bir prop yani. sonra bunu butonun componentine gidip karşıladık onPresi propunu.  */}
        <FloatActionButton onPress={()=> navigation.navigate(ADDNOTE, {type: "add"})} />
        {/* 
        * Yönlendirme yaparken gitmek istediğimiz sayfanın name'ini yazıyoruz(rootNavigatör'e bak. orada addNote sayfasının name'i ADDNOTE.)
        * Eğer navigation.navigate(ADDNOTE, {title: "serhat"}) gibi 2. parametre daha yazarsak bu şu demek: (açıklama bir alt satırda)
        * --> bu sayfadaki o yazılan elemanı, tıklanan sayfaya taşır. önce tıklanan sayfada {route} prop olarak alınır. konsola yazıldığında görülür ki route.params.title bize "serhat" yazısını verir. bu genelde tıklanan id'li bir elemanı taşımak için kullanılır.
        */}
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
