import React, {useEffect} from "react";
import {TouchableOpacity, View} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring} from '@react-spring/native';

interface Props{
    children: any
    isActive: boolean
}

export default function NavbarItem(props: Props){

    const [animation, api] = useSpring(() => ({
        backgroundColor: '#3b3b3b',
        y: 0
    }))

    useEffect(() => {
        api.start({
            backgroundColor: props.isActive ? 'purple' : '#3b3b3b',
            y: props.isActive ? -15 : 0
        })
    }, [props.isActive])

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