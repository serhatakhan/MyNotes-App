import React, {Component, useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import EditButtons from '../../components/addNote/editButtons';
import {screenStyle} from '../../styles/screenStyle';
import MyContext from '../../context';

const NoteDetail = ({route}) => {
  const {updateNote} = useContext(MyContext)

  // yazıların şeklini değiştirmek için state tut
  const [selectStyle, setSelectStyle] = useState(styles.normal)

  // route'un içindeki params'ta note var. onu ekrana bas.
  const {note} = route?.params;

  const changeStyleText = (style)=>{
    switch (style) {
        case "bold":
            setSelectStyle(styles.bold)
            break;

        case "italic":
            setSelectStyle(styles.italic)
            break;

        case "underline":
            setSelectStyle(styles.underline)
            break;

        case "left":
            setSelectStyle(styles.left)
            break;

        case "center":
            setSelectStyle(styles.center)
            break;

        case "justify":
            setSelectStyle(styles.justify)
            break;
    
        default:
            setSelectStyle(styles.normal)
            break;
    }
  }
  /*
    const changeStyleText = (style)=>{
    if(style == "bold"){
        setSelectStyle(styles.bold)
    }
    if(style == "italic"){
        setSelectStyle(styles.italic)
    }
  }
  --> Bu şekilde if'ler ile de yapılabilir. Biz switch case tercih ettik
  */

  
  // notun detay sayfasına gidildiğinde okundu rengi değişecek.
  useEffect(() => {
    updateNote(note.id, note)
    // * detay sayfasına girilip çıkıldığında notun saatini güncelle
    // bunun için de sayfadan çıkmak gerek
    return ()=>{
    updateNote(note.id, note)
    }
  }, [])
  

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={(value)=> changeStyleText(value)} />
        </View>

        {/* sadece buna flex:1 vererek üstündeki ve altındaki view'i en yukarı ve en aşağıya itmiş olduk */}
        <View style={{flex: 1, marginHorizontal: 15, padding: 10, backgroundColor: '#fff', borderRadius: 6, borderWidth:1, borderColor: AppColors.GRAY}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>Başlık</Text>
            <Text style={{fontSize: 24, fontWeight: 500, color: AppColors.PRIMARY, marginBottom: 22, marginTop: 5}}>{note.title}</Text>
          </View>

          <View>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>Not</Text>
            <Text style={[{fontSize: 22, fontWeight: 300, color: AppColors.SECONDARY, marginBottom: 22, marginTop: 5}, selectStyle]}>{note.description}</Text>
            {/* farklı stiller almasını istiyorsak dizi içine koyabiliriz buradaki gibi */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  underline: {
    textDecorationLine: "underline"
  },
  left: {
    textAlign: "left"
  },
  center: {
    textAlign: "center"
  },
  justify: {
    textAlign: "justify"
  },
  normal: {}
});

export default NoteDetail;
