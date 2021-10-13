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
import { NativeRouter, Route } from "react-router-native";
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NativeRouter>
              <View style={mainStyle.main}>
                  <Route
                      path="/"
                      exact={true}
                  >
                      <Dashboard />
                  </Route>
                  <NavBar />
              </View>
          </NativeRouter>
    </SafeAreaView>
  );
};

export default App;
