import React, {Component} from 'react';
import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import { AppColors } from '../../theme/colors';

const AddNote = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>

        {/* sadece buna flex:1 vererek üstündeki ve altındaki view'i en yukarı ve en aşağıya itmiş olduk */}
        <View style={{flex: 1}}>
          <TextInput
            style={{
              flex: 1,
              backgroundColor: '#fff',
              marginHorizontal: 15,
              marginBottom: 20,
              borderRadius: 6,
              padding: 6,
              borderWidth: 1,
              borderColor: AppColors.GRAY
            }}
            // onChangeText={onChangeText}
            value=""
            placeholder='Lütfen notunuzu bu alana yazınız'
          />
        </View>

        <View>
          <Button title={'Save Changes'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
