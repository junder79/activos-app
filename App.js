import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import Lector from './src/views/lector';

export default function App() {
  return (
    <PaperProvider>
      <Lector />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
