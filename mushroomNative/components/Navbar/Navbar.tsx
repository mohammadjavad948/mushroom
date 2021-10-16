import React from 'react';
import {View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import NavbarItem from "./NavbarItem";
import {useHistory} from 'react-router-native';
import Icon from "../Icon/Icon";
import {useThemeStore} from "../../stores/themeStore";

export default function NavBar(){

    const {theme} = useThemeStore();
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
        <View style={[
            navbarStyle.container,
            {
                backgroundColor: theme === "dark" ? '#3b3b3b' : '#e3e3e3'
            }
        ]}>
            <NavbarItem
                click={dashboard}
                route={'/'}
                exact={true}
            >
                <Icon name="dashboard" size={25}/>
            </NavbarItem>
            <NavbarItem
                click={addWork}
                route={'/search'}
            >
                <Icon name="search" size={25}/>
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