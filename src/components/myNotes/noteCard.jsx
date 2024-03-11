import React, {Component, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { AppColors } from '../../theme/colors';
import { Edit2, Trash } from 'iconsax-react-native';
import { NoteCardStyle } from '../../styles/myNotesStyles';
import { useNavigation } from '@react-navigation/native';
import { ADDNOTE, NOTEDETAIL } from '../../utils/routes';
import MyContext from '../../context';

const NoteCard = ({item}) => {
  // * NoteCard, RootNavigator içinde tanımlanan bir sayfa değil. Dolayısıyla
  // prop olarak navigation'u alamaz. Bu bir sayfa değil bileşen olduğu için
  // useNavigation'u import etmek lazım.
  const navigation = useNavigation()

  // delete için abone ol
  const {deleteNote} = useContext(MyContext)


  return (
    <TouchableOpacity onPress={()=> navigation.navigate(NOTEDETAIL, {note: item})} style={NoteCardStyle.container}>
      {/* navigate'in 2.parametresine {note: item} verdik ki tıkladığımız elemanı NOTEDETAIL sayfasına taşısın.*/}
      <View style={NoteCardStyle.bubleContainer}>
        <View style={item.read ? NoteCardStyle.buble : NoteCardStyle.bubleRead}></View>
      </View>

      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>

      <TouchableOpacity onPress={()=> deleteNote(item)} style={NoteCardStyle.trashButtonContainer}>
        <Trash size="22" color="crimson" variant="Bold"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate(ADDNOTE, {note: item, type:"update"})} style={NoteCardStyle.trashButtonContainer}>
        <Edit2 size="22" color={AppColors.PRIMARY} variant="Bold"/>
      </TouchableOpacity>
      {/* düzenleme butonuna tıklanınca addnote sayfasına gitsin yanında item'ı yolla */}
    </TouchableOpacity>
  );
};

export default NoteCard;
