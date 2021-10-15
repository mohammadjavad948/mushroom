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
  useColorScheme,
} from 'react-native';
import {BackButton, NativeRouter} from "react-router-native";
import { Provider as PaperProvider } from 'react-native-paper';
import Main from "./components/Main/Main";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NativeRouter>
              <BackButton>
                  <Main />
              </BackButton>
          </NativeRouter>
    </PaperProvider>
  );
};

export default App;
