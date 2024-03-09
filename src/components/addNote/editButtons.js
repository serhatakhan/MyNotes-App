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

const EditButtons = () => {

  // bu diziyi maple dönüp içindeki iconları render ettik
  const Buttons = [
    {
      id: 1,
      name: 'bold',
      icon: (
        <TextBold size="30" color={AppColors.SECONDARY} variant="Outline" />
      ),
    },
    {
      id: 2,
      name: 'bold',
      icon: (
        <TextItalic size="30" color={AppColors.SECONDARY} variant="Outline" />
      ),
    },
    {
      id: 3,
      name: 'bold',
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
      name: 'bold',
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
      name: 'bold',
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
      name: 'bold',
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
        <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
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
