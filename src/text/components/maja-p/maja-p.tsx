import React, { PropsWithChildren } from 'react'
import { concatClassNames } from '@maja-ui/util'

import './maja-p.css'

export interface PProps extends PropsWithChildren {
  className ?: string
}

export const P : React.FunctionComponent<PProps> = props => {
  return <p
    className={concatClassNames('maja-p', props.className)}
  >
    {props.children}
  </p>
}
