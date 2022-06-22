import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Button, Dialog, Portal, Paragraph, Appbar} from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {
  NavigationContainer,
  CommonActions,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Lector = () => {
  const navigation = useNavigation();
  const onSuccess = e => {
    setQR(e);
    navigation.navigate('DetalleActivo');
  };

  const getInfoActivo = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      //const persons = res.data;
    });
  };

  const [qr, setQR] = useState('');
  const [estadoDialog, setEstadoDialog] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <QRCodeScanner
          onRead={({data}) => onSuccess(data)}
          flashMode={RNCamera.Constants.FlashMode.off}
          reactivate={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Lector;
