import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import MyContext from '../../context';

const SecondScreen = ({route}) => {
  // route propu ile önceki sayfadan bu sayfaya taşıdığımız countu aldık. bunun içinde route'un altındaki params'tan alıyoruz !!
  // const {count} = route?.params;
  // console.log(route)
  const {count, changeCount} = useContext(MyContext)
  const {text, changeText} = useContext(MyContext)


  // Mount (Sayfa Yüklendi)=> first // ComponentDidMount
  // UnMount (Sayfadan Çıkış Yapıldı)=> second // ComponentWillUnmount
  // Update (Sayfa Güncellendiğinde)=> third // ComponentDidUpdate
  useEffect(() => {
    console.log('Mount (Sayfa Yüklendiğinde Gerçekleşecek İşlemler)');
    setTimeout(() => {
      changeText('Sayfa Yüklendiğinde Gerçekleşecek İşlemler');
    }, 3000);

    return () => {
      changeText('UnMount (Sayfadan Çıkış Yapıldığında Gerçekleşecek İşlemler)');
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      changeText('Sayfa Güncellendi');
    }
  }, [count]);

  
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.text}>{text}</Text>

      <View style={{padding: 20}}>
        <Button onPress={() => changeCount()} title="Artır" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
    color: AppColors.PRIMARY,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: AppColors.PRIMARY,
  },
});

export default SecondScreen;
