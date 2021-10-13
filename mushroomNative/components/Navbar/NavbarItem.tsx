import React from "react";
import {TouchableOpacity, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring} from '@react-spring/native';

interface Props{
    children: any
    isActive: boolean
}

export default function NavbarItem(props: Props){

    const animation = useSpring(() => ({
        from: {
            backgroundColor: 'purple'
        },
        to: {
            backgroundColor: 'white',
        }
    }))

    return (
        <a.View style={[navbarStyle.item, animation]}>
            <TouchableOpacity onPress={() => console.log('press')}>
                {props.children}
            </TouchableOpacity>
        </a.View>
    )
}