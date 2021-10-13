/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme, View,
} from 'react-native';
import {mainStyle} from "./styles/Main";
import NavBar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { NativeRouter, Route, Link } from "react-router-native";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={mainStyle.main}>
        <Dashboard />
        <NavBar />
      </View>
    </SafeAreaView>
  );
};

export default App;
