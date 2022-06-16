import React, { PropsWithChildren } from 'react'
import { concatClassNames } from '@maja-ui/util'

import './maja-context.css'

export interface MajaContextProps extends PropsWithChildren {
  className ?: string
}

export const MajaContext : React.FunctionComponent<MajaContextProps> = props => {
  return <div className={concatClassNames('maja-context', props.className)}>
    {props.children}
  </div>
}
