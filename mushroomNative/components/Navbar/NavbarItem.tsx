import React from "react";
import {View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";

interface Props{
    icon: any
    isActive: boolean
}

export default function NavbarItem(props: Props){

    return (
        <View style={navbarStyle.item}>
            {props.icon}
        </View>
    )
}