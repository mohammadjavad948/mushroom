import React, {useEffect} from "react";
import {TouchableOpacity} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring, config} from '@react-spring/native';
import {useLocation} from 'react-router-native';
import { matchPath } from "react-router";
import {useThemeStore} from "../../stores/themeStore";

interface Props{
    children: any
    route: string
    exact?: boolean
    click: any
}

export default function NavbarItem(props: Props){

    const {primary} = useThemeStore();
    const location = useLocation();

    const [animation, api] = useSpring(() => ({
        backgroundColor: '#3b3b3b',
        y: 0,
        config: config.gentle
    }));

    useEffect(() => {
        const match = matchPath(location.pathname, {
            path: props.route,
            exact: props.exact,
        })

        api.start({
            backgroundColor: match ? primary : '#3b3b3b',
            y: match ? -20 : 0
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
            <TouchableOpacity
                onPress={props.click}
                style={navbarStyle.touch}
            >
                {props.children}
            </TouchableOpacity>
        </a.View>
    )
}