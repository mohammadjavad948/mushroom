import React from "react";
import {profileStyle} from "../../styles/Profile";
import {TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";
import {useThemeStore} from "../../stores/themeStore";

export default function Theme(){

    const themes = [
        {
            text: 'Dark',
            theme: 'dark'
        },
        {
            text: 'Light',
            theme: 'light'
        }
    ]

    const {theme, setTheme, primary} = useThemeStore();

    return (
        <View
            style={profileStyle.themes}
        >
            {themes.map((e, i) => {
                return (
                    <TouchableOpacity
                        key={i}
                        style={[
                            profileStyle.theme,
                            {
                                borderColor: theme === e.theme ? primary : 'white'
                            }
                        ]}
                        onPress={() => setTheme(e.theme as any)}
                    >
                        <Text>
                            {e.text}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}