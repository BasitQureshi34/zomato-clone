import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ItemComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 6}}>Eat What Makes You Happy</Text>
      <View style={{flexDirection: 'row' , alignItems:"center"}}>
      <View style={{margin:6}}>
        <Image 
        style = {{width:80 , height: 80 , borderRadius: 40 , borderColor: "#F08080" , borderWidth:3}}
        source={{
            uri: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y="
        }}
        />
        <Text style={{ fontWeight : "600" , fontSize: 18, color: "gray", marginTop:10, textAlign:"center"}}>
            Thalis
        </Text>
      </View>
      <View style={{margin:6}}>
        <Image 
        style = {{width:80 , height: 80 , borderRadius: 40 , borderColor: "#F08080" , borderWidth:3}}
        source={{
            uri: "https://media.istockphoto.com/id/1303119992/photo/pizza_margerita.jpg?s=612x612&w=0&k=20&c=0HZZMC10ySBYvMVAKUNzknkQ1E74q8NKwTV5_K6WK6M="
        }}
        />
        <Text style={{ fontWeight : "600" , fontSize: 18, color: "gray", marginTop:10, textAlign:"center"}}>
            Pizzas
        </Text>
      </View>
      <View style={{margin:6}}>
        <Image 
        style = {{width:80 , height: 80 , borderRadius: 40 , borderColor: "#F08080" , borderWidth:3}}
        source={{
            uri: "https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=0&k=20&c=gsS00tWuoGp0_PQNEIIRII-qsCr42TSRujwBzP7P3Ls="
        }}
        />
        <Text style={{ fontWeight : "600" , fontSize: 18, color: "gray", marginTop:10, textAlign:"center"}}>
            Burgers
        </Text>
      </View>
      <View style={{margin:6}}>
        <Image 
        style = {{width:80 , height: 80 , borderRadius: 40 , borderColor: "#F08080" , borderWidth:3}}
        source={{
            uri: "https://media.istockphoto.com/id/1421688556/photo/beef-shawarma-on-a-dark-background-shawarma-with-beef-in-pita-bread.jpg?s=612x612&w=0&k=20&c=wAhnmKwTKhukglXVPQBR2FI0w4h07mwpgz0QSTY99e0="
        }}
        />
        <Text style={{ fontWeight : "600" , fontSize: 18, color: "gray", marginTop:10, textAlign:"center"}}>
            Shawarma
        </Text>
      </View>
      </View>
    </View>
  );
};

export default ItemComponent;
