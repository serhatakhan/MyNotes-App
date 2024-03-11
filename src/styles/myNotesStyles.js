import {StyleSheet} from 'react-native';
import {screenWidth} from '../utils/constants';
import {AppColors} from '../theme/colors';

export const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bubleContainer: {
    flex: 1,
  },
  buble: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: AppColors.GRAY,
    borderRadius: 100,
    marginTop: 5,
  },
  bubleRead: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: AppColors.GREEN,
    borderRadius: 100,
    marginTop: 5
  },
  noteContainer: {flex: 8},
  title: {fontSize: 19, fontWeight: 'bold', color: AppColors.SECONDARY},
  description: {color: AppColors.SECONDARY, marginVertical: 7},
  date: {color: AppColors.GRAY},
  trashButtonContainer: {flex: 1, justifyContent: "flex-end", marginBottom: 4},
});
