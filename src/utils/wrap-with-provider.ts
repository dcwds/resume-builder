import { ReactNode, createElement } from "react"
import Provider from "../components/provider"

type WrapperProps = {
  element: ReactNode
  props: object
}

export default ({ element }: WrapperProps): ReactNode =>
  createElement(Provider, null, element)
