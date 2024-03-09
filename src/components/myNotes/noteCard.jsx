import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { AppColors } from '../../theme/colors';
import { Trash } from 'iconsax-react-native';
import { NoteCardStyle } from '../../styles/myNotesStyles';
import { useNavigation } from '@react-navigation/native';
import { NOTEDETAIL } from '../../utils/routes';

const NoteCard = ({item}) => {
  // * NoteCard, RootNavigator içinde tanımlanan bir sayfa değil. Dolayısıyla
  // prop olarak navigation'u alamaz. Bu bir sayfa değil bileşen olduğu için
  // useNavigation'u import etmek lazım.
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=> navigation.navigate(NOTEDETAIL)} style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble}></View>
      </View>

      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{item.title}</Text>
        <Text style={NoteCardStyle.description}>{item.description}</Text>
        <Text style={NoteCardStyle.date}>{item.date}</Text>
      </View>

      <View style={NoteCardStyle.trashButtonContainer}>
        <Trash size="24" color={AppColors.SECONDARY} variant="Bold"/>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
