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

    const {primary, theme} = useThemeStore();
    const location = useLocation();

    const [animation, api] = useSpring(() => ({
        backgroundColor: theme === 'dark' ? '#3b3b3b' : '#e3e3e3',
        y: 0,
        config: config.gentle
    }));

    useEffect(() => {
        const match = matchPath(location.pathname, {
            path: props.route,
            exact: props.exact,
        })

        api.start({
            backgroundColor: match ? primary : (theme === 'dark' ? '#3b3b3b' : '#e3e3e3')
        })
    }, [theme]);

    useEffect(() => {
        const match = matchPath(location.pathname, {
            path: props.route,
            exact: props.exact,
        })

        api.start({
            backgroundColor: match ? primary : (theme === 'dark' ? '#3b3b3b' : '#e3e3e3'),
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