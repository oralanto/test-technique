import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Card = ({ text, image }) => {
  return (
    <View style={styles.card}>
      <Text>{text}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
});
