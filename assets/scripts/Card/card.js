import React from "react";  
import styles from "./style";
import { View, Image, Text, TouchableOpacity } from "react-native";

const Card = ({name, description, imageUrl}) => {
    return(
        
        <View style ={styles.cardContainer}>
            <Image source = {{uri: imageUrl}} 
            style={styles.cardImage}/>
            <Text style ={styles.cardName}>
                {name}</Text>
            <Text style={styles.cardDescription}>
                {description}</Text>
        </View>
    );
};

export default Card;

