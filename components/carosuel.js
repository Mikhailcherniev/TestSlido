import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react'

const Carosuel = () => {
    const carosuelData  = [
       { id: "01",
        image: require("../img/pessoas.png")
    },

    { id: "02",
        image: require("../img/pessoas.png")
    },

    { id: "03",
        image: require("../img/pessoas.png")
    },

    ];

    return (
        <View>
            <Text> CAVALO HOMOSSEXUAL </Text>
            <FlatList data = {carosuelData} renderItem={()=><View></View>}/>
        </View>
    )

};


const renderItem = ()=>{
    
}

export default Carosuel;

const stlyes = StyleSheet.create({});