import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL, SECONDSCREEN, STATEXAMPLE, USEFFECTEXAMPLE} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import NoteDetail from '../screens/noteDetail';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';
import StateExample from '../screens/stateExample';
import UseEffectExample from '../screens/useEffectExample';
import SecondScreen from '../screens/useEffectExample/secondScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    // initialRouteName={MYNOTES} --> başlangıç olarak hangi sayfadan başlasın
    <Stack.Navigator
      initialRouteName={MYNOTES}
      screenOptions={{
        headerTintColor: AppColors.SECONDARY,
        // sol üstteki Geri yazısını kaldır
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen options={{
        headerRight: (props) => (
          <HeaderRight />
        ),
        // header'ın alt çizgisini kaldır
        headerShadowVisible: false,
        // header'ın arka planını transparan yap
        headerTransparent: true
      }} name={ADDNOTE} component={AddNote} />
      <Stack.Screen options={{headerShown: false}} name={MYNOTES} component={MyNotes} />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
      <Stack.Screen name={STATEXAMPLE} component={StateExample} />
      <Stack.Screen name={USEFFECTEXAMPLE} component={UseEffectExample} />
      <Stack.Screen name={SECONDSCREEN} component={SecondScreen} />
    </Stack.Navigator>
  );
}
// {headerShown: false} özelliğini ana sayfada kapattık. orayı kendimiz yaptık.

// * RootNavigator, buradaki bütün sayfalara navigation'ı prop olarak gönderiyor.
// çünkü App.jsx de NavigationContainer ile sarmalanmış durumda. sayfanın içinde prop olarak
// useNavigation'u import etmektense navigation'ı prop olarak alabiliriz.

export default RootNavigator;
