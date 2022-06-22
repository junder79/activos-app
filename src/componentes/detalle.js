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
const DetalleActivo = ({route, navigation}) => {
  const {datosActivo} = route.params;
  const {
    nombre,
    codigo_activo,
    asignacion_actual,
    nombreSegmento,
    modelo,
    numero_serie,
    empresa_nombre,
    nombre_marca,
    nombre_obra,
    estado,
    costo,
    imagen,
  } = datosActivo;
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List.Item
          title="Activo"
          description={nombre}
          left={props => <List.Icon {...props} icon="tag" />}
        />
        <List.Item
          title="Personal Asignado"
          description={asignacion_actual}
          left={props => <List.Icon {...props} icon="tag" />}
        />
        <List.Item
          title="Código QR"
          description={codigo_activo}
          left={props => <List.Icon {...props} icon="qrcode" />}
        />
        <List.Item
          title="Segmento"
          description={nombreSegmento}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Marca"
          description={nombre_marca}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Modelo"
          description={modelo}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Nº Serie"
          description={numero_serie}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Empresa"
          description={empresa_nombre}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Obra"
          description={nombre_obra}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Estado"
          description={estado}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Costo Neto"
          description={'$' + costo}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <Card>
          <Card.Cover
            source={{
              uri: 'http://grupohexxa.cl/sistemas/activos/imagenes/' + imagen,
            }}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalleActivo;
