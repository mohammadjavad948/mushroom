import React, {useEffect} from "react";
import {TouchableOpacity} from "react-native";
import {navbarStyle} from "../../styles/Navbar";
import {a, useSpring} from '@react-spring/native';
import {useLocation} from 'react-router-native';
import { matchPath } from "react-router";

interface Props{
    children: any
    route: string
    exact?: boolean
    click: any
}

export default function NavbarItem(props: Props){

    const location = useLocation();

    const [animation, api] = useSpring(() => ({
        backgroundColor: '#3b3b3b',
        y: 0
    }));

    useEffect(() => {
        const match = matchPath(location.pathname, {
            path: props.route,
            exact: props.exact,
        })

        api.start({
            backgroundColor: match ? '#f83cf3' : '#3b3b3b',
            y: match ? -15 : 0
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
            <TouchableOpacity onPress={props.click}>
                {props.children}
            </TouchableOpacity>
        </a.View>
    )
}