import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import Provider from './src/context/provider';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// * RootNavigator, içindeki bütün sayfalara navigation'ı prop olarak gönderiyor.
// çünkü App.jsx de NavigationContainer ile sarmalanmış durumda.


// useContext kullanmak için Provider ile uygulamamızı sarmaladık
export default App;
