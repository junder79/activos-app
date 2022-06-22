import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button, Dialog, Portal, List, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
function DetalleActivo() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List.Item title="Nombre Activo" description="Item description" />
        <List.Item
          title="Personal Asignado"
          description="Item description"
          left={props => <List.Icon {...props} icon="tag" />}
        />
        <List.Item
          title="Código QR"
          description="Item description"
          left={props => <List.Icon {...props} icon="qrcode" />}
        />
        <List.Item
          title="Segmento"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Tipo Activo"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Modelo"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Nº Serie"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Empresa"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Obra"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Estado"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Costo Neto"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Card>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetalleActivo;
