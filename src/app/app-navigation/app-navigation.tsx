import React from 'react'
import { concatClassNames } from '@maja-ui/util'

import './app-navigation.css'

export interface AppNavigationProps {
  className ?: string
}

export const AppNavigation : React.FunctionComponent<AppNavigationProps> = props => {
  return <div className={concatClassNames('app-navigation', props.className)}>
    {props.children}
  </div>
}
