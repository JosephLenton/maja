import React from 'react'
import { concatClassNames } from '~util/concat-class-names'

import './maya-context.css'

export interface MayaContextProps {
  className ?: string
}

export const MayaContext : React.FunctionComponent<MayaContextProps> = props => {
  return <div className={concatClassNames('maya-context', props.className)}>
    {props.children}
  </div>
}
