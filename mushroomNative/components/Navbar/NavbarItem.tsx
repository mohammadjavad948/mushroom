import React from "react";
import {TouchableOpacity, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring} from '@react-spring/native';

interface Props{
    children: any
    isActive: boolean
}

export default function NavbarItem(props: Props){

    return (
        <a.View style={navbarStyle.item}>
            <TouchableOpacity onPress={() => console.log('press')}>
                {props.children}
            </TouchableOpacity>
        </a.View>
    )
}