import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import NavbarItem from "./NavbarItem";

export default function NavBar(){


    return (
        <View style={navbarStyle.container}>
            <NavbarItem route={'/'}>
                <Icon name="dashboard" size={25}/>
            </NavbarItem>
            <NavbarItem route={'/'}>
                <Icon name="add" size={25}/>
            </NavbarItem>
            <NavbarItem route={'/'}>
                <Icon name="layers" size={25}/>
            </NavbarItem>
            <NavbarItem route={'/'}>
                <Icon name="person" size={25}/>
            </NavbarItem>
        </View>
    )
}