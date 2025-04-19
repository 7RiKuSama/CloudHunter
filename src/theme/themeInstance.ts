import { ThemeProps } from "../types/theme"
import { ColorProps } from "../types/theme"

export const lightTheme: ThemeProps['theme'] = {
    bg: 'white',
    color: "black",
    boxColor: "black",
    boxBg: "rgba(0, 132, 255, 0.1)",
    borderColor: "rgba(10, 33, 54, 0.29)",
    secondColor: "rgb(2, 58, 131)",
    isEnabled: false
};



export const darkTheme: ThemeProps['theme'] = {
    bg: "rgb(29, 30, 38)",
    color: "white",
    boxColor: "white",
    boxBg: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(98, 164, 226, 0.27)",
    secondColor: "rgba(120, 175, 247, 0.8)",
    isEnabled: true
};

export const Colors: ColorProps = {
    danger: "rgba(255, 57, 57, 0.84)",
    hoverText: "rgba(255, 255, 255, 0.84)",
    hoverLight: "rgba(17, 79, 107, 0.88)"
}


