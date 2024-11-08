import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React from 'react';

const Categories = () => {
  const items = [
    {
      id: '1',
      name: 'fastest delivery',
    },
    {
      id: '2',
      name: 'rating 4.0+',
    },
    {
      id: '3',
      name: 'offers',
    },
    {
      id: '4',
      name: 'cuisines',
    },
    {
      id: '5',
      name: 'Pro',
    },
    {
        id: '6',
        name:"I am feeling lucky today"
    }
  ];

  return (
  <View style={{ marginTop: 5}}>
    <FlatList
      showsHorizontalScrollIndicator={false}  
      horizontal={true}
      data={items}
      keyExtractor={(item) => item.id} // Add keyExtractor to avoid warnings
      renderItem={({ item }) => (
        <Pressable style={{backgroundColor:"#F08080", margin:5 , padding: 5 , borderRadius: 6}}>
          <Text style={{color:"#FFF"}}>{item.name}</Text>
        </Pressable>
      )}
    />
  </View>
);
}

export default Categories; // Moved to bottom of the component definition

const styles = StyleSheet.create({});
