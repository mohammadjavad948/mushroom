import React from "react";
import {TouchableHighlight, TouchableOpacity, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";

interface Props{
    children: any
    isActive: boolean
}

export default function NavbarItem(props: Props){

    return (
        <View style={navbarStyle.item}>
            <TouchableOpacity onPress={() => console.log('press')}>
                {props.children}
            </TouchableOpacity>
        </View>
    )
}