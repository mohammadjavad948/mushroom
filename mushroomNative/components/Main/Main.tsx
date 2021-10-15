import React from "react";
import {mainStyle} from "../../styles/Main";
import {Route} from "react-router-native";
import Dashboard from "../Dashboard/Dashboard";
import AddWork from "../AddWork/AddWork";
import WorkGroup from "../WorkGroup/WorkGroup";
import Profile from "../Profile/Profile";
import NavBar from "../Navbar/Navbar";
import {View} from "react-native";

export default function Main(){

    return (
        <View style={mainStyle.main}>
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
        </View>
    )
}