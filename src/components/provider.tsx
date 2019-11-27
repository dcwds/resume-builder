import React, { FC, Fragment, ReactNode } from "react"
import { Global, css } from "@emotion/core"

import { ThemeProvider } from "emotion-theming"
import theme from "../styles/theme"

type Props = {
  children: ReactNode
}

const Provider: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          html,
          body {
            font-size: 105%;
            height: 100vh;
            margin: 0;
            min-height: 100vh;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }
        `}
      />
      {children}
    </Fragment>
  </ThemeProvider>
)

export default Provider
