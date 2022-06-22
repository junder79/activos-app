import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {Button, Dialog, Portal, Paragraph} from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

function DetalleModal({estadoDialog, setEstadoDialog}) {
  const hideDialog = () => setEstadoDialog(false);
  return (
    <Portal>
      <Dialog visible={estadoDialog} onDismiss={hideDialog}>
        <Dialog.Actions>
          <Paragraph>This is simple dialog</Paragraph>
          <Button onPress={() => setEstadoDialog(false)}>Cancel</Button>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const Lector = () => {
  const onSuccess = e => {
    setQR(e);

    setEstadoDialog(true);
  };

  const [qr, setQR] = useState('');
  const [estadoDialog, setEstadoDialog] = useState(false);
  return (
    <SafeAreaView>
      <StatusBar />
      <DetalleModal
        estadoDialog={estadoDialog}
        setEstadoDialog={setEstadoDialog}
      />
      <Button
        icon="camera"
        mode="outlined"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <QRCodeScanner
          onRead={({data}) => onSuccess(data)}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
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
