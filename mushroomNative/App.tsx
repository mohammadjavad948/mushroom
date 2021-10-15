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
  StatusBar,
  useColorScheme, View,
} from 'react-native';
import {mainStyle} from "./styles/Main";
import NavBar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import {BackButton, NativeRouter, Route} from "react-router-native";
import { Provider as PaperProvider } from 'react-native-paper';
import AddWork from "./components/AddWork/AddWork";
import Profile from "./components/Profile/Profile";
import WorkGroup from "./components/WorkGroup/WorkGroup";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NativeRouter>
              <BackButton>
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
              </BackButton>
          </NativeRouter>
    </PaperProvider>
  );
};

export default App;
