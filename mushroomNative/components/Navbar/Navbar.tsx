import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";

export default function NavBar(){


    return (
        <View style={navbarStyle.container}>
            <Icon name="dashboard" size={25}/>
            <Icon name="add" size={25}/>
            <Icon name="layers" size={25}/>
            <Icon name="person" size={25}/>
        </View>
    )
}