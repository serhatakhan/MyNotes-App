import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

export const screenStyle = StyleSheet.create({
  // flex:1 --> tüm ekranı kaplaması anlamına geliyor
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
});