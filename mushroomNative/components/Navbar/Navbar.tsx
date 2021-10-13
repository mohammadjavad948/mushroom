import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import NavbarItem from "./NavbarItem";

export default function NavBar(){


    return (
        <View style={navbarStyle.container}>
            <NavbarItem route={'/'} exact={true}>
                <Icon name="dashboard" size={25}/>
            </NavbarItem>
            <NavbarItem route={'/add'}>
                <Icon name="add" size={25}/>
            </NavbarItem>
            <NavbarItem route={'/subject'}>
                <Icon name="layers" size={25}/>
            </NavbarItem>
            <NavbarItem route={'/info'}>
                <Icon name="person" size={25}/>
            </NavbarItem>
        </View>
    )
}