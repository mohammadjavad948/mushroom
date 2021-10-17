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
} from 'react-native';
import {BackButton, NativeRouter} from "react-router-native";
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import Main from "./components/Main/Main";
import {useAuthStore} from "./stores/authStore";
import Auth from "./components/Auth/Auth";
import {QueryClient, QueryClientProvider} from "react-query";
import {useThemeStore} from "./stores/themeStore";
import Icon from 'react-native-vector-icons/MaterialIcons';

const queryClient = new QueryClient()

const App = () => {
  const {theme, primary} = useThemeStore();
  const {token} = useAuthStore();

  const darkTheme = {
      ...DarkTheme,
      dark: true,
      colors: {
          ...DarkTheme.colors,
          primary: primary
      },
  };

  const lightTheme = {
        ...DefaultTheme,
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            primary: primary
        },
  };

  return (
    <PaperProvider
        theme={theme === 'dark' ? darkTheme : lightTheme}
        settings={{
            icon: props => <Icon {...props} />,
        }}
    >
        <StatusBar barStyle={'light-content'} />
        <QueryClientProvider client={queryClient}>
          <NativeRouter>
              <BackButton>
                  {token === "" ? <Auth /> : <Main />}
              </BackButton>
          </NativeRouter>
        </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
