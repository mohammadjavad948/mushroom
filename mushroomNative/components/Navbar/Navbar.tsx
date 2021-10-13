import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import NavbarItem from "./NavbarItem";

export default function NavBar(){

    function click(){
        console.log('click!')
    }

    return (
        <View style={navbarStyle.container}>
            <NavbarItem
                click={click}
                route={'/'}
                exact={true}
            >
                <Icon name="dashboard" size={25}/>
            </NavbarItem>
            <NavbarItem
                click={click}
                route={'/add'}
            >
                <Icon name="add" size={25}/>
            </NavbarItem>
            <NavbarItem
                click={click}
                route={'/subject'}
            >
                <Icon name="layers" size={25}/>
            </NavbarItem>
            <NavbarItem
                click={click}
                route={'/info'}
            >
                <Icon name="person" size={25}/>
            </NavbarItem>
        </View>
    )
}