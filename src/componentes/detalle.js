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
import Imagen from './imagen';
import 'intl';
import 'intl/locale-data/jsonp/en';

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
    imagen2,
    imagen3,
    imagen4,
    nro_serie_img,
    nro_factura,
  } = datosActivo;

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List.Item
          title="Activo"
          description={nombre}
          left={props => <List.Icon {...props} icon="tools" />}
        />
        <List.Item
          title="Personal Asignado"
          description={asignacion_actual}
          left={props => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="Código QR"
          description={codigo_activo}
          left={props => <List.Icon {...props} icon="qrcode" />}
        />
        <List.Item
          title="Segmento"
          description={nombreSegmento}
          left={props => <List.Icon {...props} icon="ev-plug-type1" />}
        />
        <List.Item
          title="Marca"
          description={nombre_marca}
          left={props => <List.Icon {...props} icon="trademark" />}
        />
        <List.Item
          title="Modelo"
          description={modelo}
          left={props => <List.Icon {...props} icon="tag" />}
        />
        <List.Item
          title="Nº Serie"
          description={numero_serie}
          left={props => <List.Icon {...props} icon="barcode" />}
        />
        <List.Item
          title="Empresa"
          description={empresa_nombre}
          left={props => <List.Icon {...props} icon="home" />}
        />
        <List.Item
          title="Obra"
          description={nombre_obra}
          left={props => <List.Icon {...props} icon="office-building" />}
        />
        <List.Item
          title="Estado"
          description={estado}
          left={props => <List.Icon {...props} icon="state-machine" />}
        />
        <List.Item
          title="N° Factura"
          description={nro_factura}
          left={props => <List.Icon {...props} icon="file-document" />}
        />
        <List.Item
          title="Costo Neto"
          description={'$ ' + new Intl.NumberFormat('es-CL').format(costo)}
          left={props => <List.Icon {...props} icon="cash" />}
        />

        <ScrollView horizontal>
          {imagen != '' && <Imagen imagen={imagen} />}

          {imagen2 != '' && <Imagen imagen={imagen2} />}

          {imagen3 != '' && <Imagen imagen={imagen3} />}

          {imagen4 != '' && <Imagen imagen={imagen4} />}

          {nro_serie_img != '' && <Imagen imagen={nro_serie_img} />}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalleActivo;
