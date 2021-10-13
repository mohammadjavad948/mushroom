import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import NavbarItem from "./NavbarItem";
import {useHistory} from 'react-router-native';

export default function NavBar(){

    const history = useHistory()

    function click(){
        console.log('click!')
    }

    function dashboard(){
        history.push('/')
    }

    function addWork(){
        history.push('/work/add')
    }

    return (
        <View style={navbarStyle.container}>
            <NavbarItem
                click={dashboard}
                route={'/'}
                exact={true}
            >
                <Icon name="dashboard" size={25}/>
            </NavbarItem>
            <NavbarItem
                click={addWork}
                route={'/work/add'}
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