import React, {useEffect} from "react";
import {TouchableOpacity} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring} from '@react-spring/native';
import {useLocation} from 'react-router-native';

interface Props{
    children: any
    route: string
}

export default function NavbarItem(props: Props){

    const location = useLocation();

    const [animation, api] = useSpring(() => ({
        backgroundColor: '#3b3b3b',
        y: 0
    }))

    useEffect(() => {
        api.start({
            backgroundColor: location.pathname.startsWith(props.route)
                ? 'purple' : '#3b3b3b',
            y: location.pathname.startsWith(props.route)
                ? -15 : 0
        })
    }, [location.pathname]);

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