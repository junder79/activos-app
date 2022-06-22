import * as React from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';

const Detalle = estadoDialog => {
  //const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={estadoDialog} onDismiss={hideDialog}>
        <Dialog.Actions>
          <Button onPress={() => console.log('Cancel')}>Cancel</Button>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Detalle;
