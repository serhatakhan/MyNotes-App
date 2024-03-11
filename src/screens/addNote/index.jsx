import React, {Component, useContext, useState} from 'react';
import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import getRandomNumber from '../../utils/functions';
import MyContext from '../../context';
import { useNavigation } from '@react-navigation/native';

const AddNote = ({route}) => {
  // context'e abone ol
  const {addNote, updateNote} = useContext(MyContext)

  // navigasyon kurulumunu yap
  const navigation = useNavigation()

  // gelen route'u karşıla içindeki note'u ve type'ı al. sonra bunu state'in başlangıç değeri yap
  const {note} = route?.params;
  const {type} = route?.params;

  // yazılanları bu state'de tut(açıklama için ayrı, başlık için ayrı)
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  // inputların boş olup olmadığının state'ini tut
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    // inputların içi ile ilgili. title yoksa kaydederken uyarı yazısı çıksın
    if(!title){
      setTitleRequired(true)
    }
    if(!description){
      setDescriptionRequired(true)
    }
    if(title && description){
      setTitleRequired(false)
      setDescriptionRequired(false)
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: '17:00',
        read: false
      };
      // yeni notu ekle
      addNote(form)
      // önceki sayfaya dön
      navigation.goBack()
    }
  };

  // notu güncelle
  const editNote = () => {
    if(!title){
      setTitleRequired(true)
    }
    if(!description){
      setDescriptionRequired(true)
    }
    if(title && description){
      setTitleRequired(false)
      setDescriptionRequired(false)
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '17:00',
        read: false
      };
      // yeni notu ekle
      updateNote(note.id, form)
      // önceki sayfaya dön
      navigation.goBack()
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        {/* sadece buna flex:1 vererek üstündeki ve altındaki view'i en yukarı ve en aşağıya itmiş olduk */}
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 500, padding: 15, fontSize: 20}}>
            Başlık
          </Text>
          <TextInput
            multiline={true}
            textAlignVertical='top'
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 15,
              borderRadius: 6,
              padding: 8,
              borderWidth: 1,
              borderColor: AppColors.GRAY,
              height: 100,
            }}
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder="Lütfen başlığı bu alana yazınız"
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: 'red',
                marginHorizontal: 10,
                padding: 5,
              }}>
              Lütfen başlık alanını doldurunuz
            </Text>
          )}

          <Text style={{fontWeight: 500, padding: 15, fontSize: 20}}>
            Açıklama
          </Text>
          <TextInput
            multiline={true}
            textAlignVertical='top'
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 15,
              borderRadius: 6,
              padding: 8,
              borderWidth: 1,
              borderColor: AppColors.GRAY,
              height: 390,
            }}
            onChangeText={text => setDescription(text)}
            value={description}
            placeholder="Lütfen notunuzu bu alana yazınız"
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: 'red',
                marginHorizontal: 10,
                padding: 5,
              }}>
              Lütfen açıklama alanını doldurunuz
            </Text>
          )}
        </View>

        <View>
          <Button
            onPress={type === 'update' ? editNote : saveNote}
            title={type === 'update' ? 'Güncelle' : 'Notu Kaydet'}
          />
        </View>
        {/* NoteCard'da ikondan bu sayfaya yönlendirme yaparken farklı type ile yolladık,
        FloatActionButton'dan bu sayfaya yönlendirme yaparken farklı type ile yolladık.
        type'larına göre butonda yazan metni değiştirdik. NoteCard'da type ile birlikte
        note adı altında item'i de yolladığımız için edit butona basıldığında basılan
        notun bilgilerini görebiliyoruz. */}
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
