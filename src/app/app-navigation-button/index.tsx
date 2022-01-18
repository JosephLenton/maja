import React from 'react'
import { Button } from './../../buttons'
import { concatClassNames } from '@maja-ui/util'

import './style.css'

export interface AppNavigationButtonProps {
  className ?: string
  selected ?: boolean
  onClick: () => void
  children: string
}

export const AppNavigationButton : React.FunctionComponent<AppNavigationButtonProps> = props => {
  return <Button
      className={concatClassNames("app-navigation-button", props.className)}
      selected={props.selected}
      onClick={props.onClick}
      tooltip={props.children}
  >
    <span className="app-navigation-button__text">
      {props.children}
    </span>
  </Button>
}
