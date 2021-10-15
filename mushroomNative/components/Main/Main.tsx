import React from "react";
import {mainStyle} from "../../styles/Main";
import {Route} from "react-router-native";
import Dashboard from "../Dashboard/Dashboard";
import AddWork from "../AddWork/AddWork";
import WorkGroup from "../WorkGroup/WorkGroup";
import Profile from "../Profile/Profile";
import NavBar from "../Navbar/Navbar";
import {View} from "react-native";
import {useSpring, a} from "@react-spring/native";

export default function Main(){

    const animation = useSpring(() => ({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        }
    }))

    return (
        <a.View style={[mainStyle.main, ...animation]}>
            <Route
                path="/"
                exact={true}
            >
                <Dashboard />
            </Route>
            <Route
                path="/work/add"
            >
                <AddWork />
            </Route>
            <Route
                path="/workgroup"
            >
                <WorkGroup />
            </Route>
            <Route
                path="/profile"
            >
                <Profile />
            </Route>
            <NavBar />
        </a.View>
    )
}