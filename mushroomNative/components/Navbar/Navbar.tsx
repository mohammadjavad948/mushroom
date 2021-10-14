import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import NavbarItem from "./NavbarItem";
import {useHistory} from 'react-router-native';

export default function NavBar(){

    const history = useHistory()

    function workGroup(){
        history.push('/workgroup')
    }

    function dashboard(){
        history.push('/')
    }

    function addWork(){
        history.push('/work/add')
    }

    function profile(){
        history.push('/profile')
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
                click={workGroup}
                route={'/workgroup'}
            >
                <Icon name="layers" size={25}/>
            </NavbarItem>
            <NavbarItem
                click={profile}
                route={'/profile'}
            >
                <Icon name="person" size={25}/>
            </NavbarItem>
        </View>
    )
}