import * as React from 'react';
import {AppRegistry, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Importar Componentes
import Lector from './src/views/lector';
import DetalleActivo from './src/componentes/detalle';

const Stack = createNativeStackNavigator();

function LectorComponente({navigation, route}) {
  return (
    <PaperProvider>
      <Lector navigation={navigation} route={route} />
    </PaperProvider>
  );
}

function DetalleComponente({navigation, route}) {
  return (
    <PaperProvider>
      <DetalleActivo navigation={navigation} route={route}></DetalleActivo>
    </PaperProvider>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LectorComponente"
          component={LectorComponente}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="DetalleActivo"
          component={DetalleComponente}
          options={{title: 'Activo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
