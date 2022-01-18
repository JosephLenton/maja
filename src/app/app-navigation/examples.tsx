import { AppNavigation, AppNavigationProps } from "."
import { AppNavigationButton } from "./.."
import React from "react"

export const AppNavigationExample : React.FunctionComponent<AppNavigationProps> = props => {
  return <AppNavigation
    {...props}
  >
    <AppNavigationButton onClick={() => {}}>
      Maps
    </AppNavigationButton>

    <AppNavigationButton onClick={() => {}}>
      Penguins
    </AppNavigationButton>

    <AppNavigationButton onClick={() => {}}>
      Help
    </AppNavigationButton>
  </AppNavigation>
}

export const AppNavigationEmptyExample : React.FunctionComponent<AppNavigationProps> = props => {
  return <AppNavigation
    {...props}
  />
}
