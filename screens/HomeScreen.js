import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import AntDesign from "@expo/vector-icons/AntDesign";
import Categoreis from "../components/Categoreis";
import ItemComponent from "../components/ItemComponent";
import hotels from "../data/hotels";
import Hotels from "../components/Hotels";

const HomeScreen = () => {
  const data = hotels;
  return (
    <SafeAreaView style={styles.safeArea1}> 
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={20} color="#E32636" />
        <TextInput
          style={styles.text1}
          placeholder="Restaurant name, cuisines, or a dish"
        />
      </View>

      <Categoreis />

      <Pressable>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ margin: 5 }}>
            <Image
              style={{ width: 150, height: 100  , margin: 5 , borderRadius: 5}}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
              }}
              resizeMode="cover" // Optional: Helps control image fit
            />
          </View>
          <View style={{ margin: 5 }}>
            <Image
              style={{ width: 150, height: 100  , margin: 5 , borderRadius: 5}}
              source={{
                uri: "https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png",
              }}
              resizeMode="cover" // Optional: Helps control image fit
            />
          </View>
        
        </View>
      </Pressable>
    <ItemComponent/>

    {data.map ((item) => <Hotels restaurant = {item}/>)}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    padding: 10,
    borderRadius: 6.5,
  },
  text1: {
    height: "auto",
    width: "100%",
    paddingLeft: 5,
  },
  safeArea1: {
    margin: 10,
    
  },
});
