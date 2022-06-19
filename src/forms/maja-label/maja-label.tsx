import { concatClassNames } from '@maja-ui/util'
import React, { PropsWithChildren } from 'react'

import './maja-label.css'

export interface LabelProps extends PropsWithChildren {
  className ?: string
}

export const Label : React.FunctionComponent<LabelProps> = props => {
  return <label
      className={concatClassNames(`maja-label`, props.className)}
  >
    {props.children}
  </label>
}
