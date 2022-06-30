import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button, Dialog, Portal, List} from 'react-native-paper';
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
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => <List.Icon {...props} icon="tools" color="black" />}
        />
        <List.Item
          title="Personal Asignado"
          description={asignacion_actual}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => <List.Icon {...props} icon="account" color="black" />}
        />
        <List.Item
          title="Código QR"
          description={codigo_activo}
          style={estilos.colorTexto}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => <List.Icon {...props} icon="qrcode" color="black" />}
        />
        <List.Item
          title="Segmento"
          description={nombreSegmento}
          style={estilos.colorTexto}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => (
            <List.Icon {...props} icon="ev-plug-type1" color="black" />
          )}
        />
        <List.Item
          title="Marca"
          description={nombre_marca}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => (
            <List.Icon {...props} icon="trademark" color="black" />
          )}
        />
        <List.Item
          title="Modelo"
          description={modelo}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => <List.Icon {...props} icon="tag" color="black" />}
        />
        <List.Item
          title="Nº Serie"
          description={numero_serie}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => <List.Icon {...props} icon="barcode" color="black" />}
        />
        <List.Item
          title="Empresa"
          description={empresa_nombre}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => <List.Icon {...props} icon="home" color="black" />}
        />
        <List.Item
          title="Obra"
          description={nombre_obra}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => (
            <List.Icon {...props} icon="office-building" color="black" />
          )}
        />
        <List.Item
          title="Estado"
          description={estado}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => (
            <List.Icon {...props} icon="state-machine" color="black" />
          )}
        />
        <List.Item
          title="N° Factura"
          description={nro_factura}
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          left={props => (
            <List.Icon {...props} icon="file-document" color="black" />
          )}
        />
        <List.Item
          title="Costo Neto"
          descriptionStyle={{color: 'black'}}
          titleStyle={{color: 'black'}}
          description={'$ ' + new Intl.NumberFormat('es-CL').format(costo)}
          left={props => <List.Icon {...props} icon="cash" color="black" />}
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

const estilos = StyleSheet.create({
  colorTexto: 'black',
});
export default DetalleActivo;
