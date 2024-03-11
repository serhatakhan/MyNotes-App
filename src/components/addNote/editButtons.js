import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignJustifycenter,
  TextalignLeft,
} from 'iconsax-react-native';

const EditButtons = ( {onChangeStyle} ) => {

  // bu diziyi maple dönüp içindeki iconları render ettik
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: (
        <TextBold size="30" color={AppColors.SECONDARY} variant="Outline" />
      ),
    },
    {
      id: 2,
      value: 'italic',
      icon: (
        <TextItalic size="30" color={AppColors.SECONDARY} variant="Outline" />
      ),
    },
    {
      id: 3,
      value: 'underline',
      icon: (
        <TextUnderline
          size="30"
          color={AppColors.SECONDARY}
          variant="Outline"
        />
      ),
    },
    {
      id: 4,
      value: 'left',
      icon: (
        <TextalignLeft
          size="30"
          color={AppColors.SECONDARY}
          variant="Outline"
        />
      ),
    },
    {
      id: 5,
      value: 'center',
      icon: (
        <TextalignCenter
          size="30"
          color={AppColors.SECONDARY}
          variant="Outline"
        />
      ),
    },
    {
      id: 6,
      value: 'justify',
      icon: (
        <TextalignJustifycenter
          size="30"
          color={AppColors.SECONDARY}
          variant="Outline"
        />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity onPress={()=> onChangeStyle(item.value)} key={item.id}>{item.icon}</TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: 'space-around',
  },
});

export default EditButtons;
