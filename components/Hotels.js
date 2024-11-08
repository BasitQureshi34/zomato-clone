import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Hotels = (props) => {
  const restaurant = props.restaurant;
  console.log(restaurant);
  return (
    <View>
      <View style={{margin: 10}}>
        <Image
          style={{ width: "100%", aspectRatio: 6/4,borderTopLeftRadius:7, borderTopRightRadius:7 }}
          source={{ uri: restaurant.featured_image }}
        />
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
