import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native'

let ScreenWidth = Dimensions.get("window").width - 20;

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },

    logo: {
    width: ScreenWidth,
      height: ScreenWidth,
      
    },
  });

const Imagen = ({ imagen }) => {

    return (
        <View style={styles.container}>
            <Image
             style={styles.logo}
                source={{
                    uri: 'http://grupohexxa.cl/sistemas/activos/imagenes/' + imagen,
                }}

            />
         </View>
    )
}

export default Imagen;