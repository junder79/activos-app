import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  const onSuccess = async e => {
    setQR(e);
    try {
      const datosActivo = await getInfoActivo(e);

      navigation.navigate('DetalleActivo', {datosActivo: datosActivo});
    } catch (error) {
      console.error(error);
    }
  };

  const getInfoActivo = async qr => {
    try {
      const resp = await fetch(
        `https://grupohexxa.cl/sistemas/activos/APP/api-activos.php?codigoString=${qr}`,
      );

      const [data] = await resp.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const [qr, setQR] = useState('');
  const [estadoDialog, setEstadoDialog] = useState(false);
  return (
    <QRCodeScanner
      onRead={({data}) => onSuccess(data)}
      flashMode={RNCamera.Constants.FlashMode.off}
      reactivate={true}
      reactivateTimeout={5000}
      style={{height: '100%'}}
    />
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
