import React from "react";
import {TouchableOpacity, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring} from '@react-spring/native';

interface Props{
    children: any
    isActive: boolean
}

export default function NavbarItem(props: Props){

    const [animation, api] = useSpring(() => ({
        backgroundColor: 'purple',
        y: -15
    }))

    return (
        <a.View style={[
            {
                transform: [
                    {
                        translateY: animation.y
                    }
                ],
                backgroundColor: animation.backgroundColor
            },
            navbarStyle.item,
        ]}>
            <TouchableOpacity onPress={() => console.log('press')}>
                {props.children}
            </TouchableOpacity>
        </a.View>
    )
}