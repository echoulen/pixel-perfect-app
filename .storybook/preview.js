import {ThemeProvider as EmotionThemeProvider} from "emotion-theming"
import React from "react"
import "../src/css/index.css"
import {exam2Theme} from "../src/core/theme";
import '@fontsource/ubuntu';
import '@fontsource/open-sans';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "black",
    values: [
      {
        name: "black",
        value: exam2Theme.palette.background.default,
      }
    ],
  }
}

export const decorators = [
  (Story) => {
    return (
      <EmotionThemeProvider theme={exam2Theme}>
        <Story />
      </EmotionThemeProvider>
    )
  },
]
