import { ReactNode, createElement } from "react"
import { ThemeProvider } from "emotion-theming"

import theme from "../styles/theme"

type WrapperProps = {
  element: ReactNode
  props: object
}

export default ({ element }: WrapperProps): ReactNode =>
  createElement(ThemeProvider, { theme: theme }, element)
