import React from 'react'
import { concatClassNames } from '~util/concat-class-names'

import './maja-context.css'

export interface MajaContextProps {
  className ?: string
}

export const MajaContext : React.FunctionComponent<MajaContextProps> = props => {
  return <div className={concatClassNames('maja-context', props.className)}>
    {props.children}
  </div>
}
