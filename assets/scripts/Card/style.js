import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, heigh: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4, 
        elevation: 5,
        borderWidth: 2,
        borderColor: 'black'
    },
    cardImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    cardName:{
        fontSize: 24,
        fontWight: 'bold',
        marginTop: 10,
        fontFamily: 'Pixelify Sans',
    },
    cardDescription:{
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Pixelify Sans',
    },

});

export default styles;