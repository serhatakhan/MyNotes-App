import React, {Component} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import { ADDNOTE } from '../../utils/routes';

// navigationı okumak için prop olarak {navigation}'ı aldık. navigators dersinden hatırla!! butona basınca addNote sayfasına gideceğiz
const MyNotes = ( {navigation} ) => {
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
          data={mockData}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />

         {/* burada butona onPress adında prop gönderdik. normal bir prop yani. sonra bunu butonun componentine gidip karşıladık onPresi propunu.  */}
        <FloatActionButton onPress={()=> navigation.navigate(ADDNOTE)} />
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
