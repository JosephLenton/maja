import React from 'react'
import { concatClassNames } from '@maja-ui/util'

import './maja-horizontal-line.css'

export interface HorizontalLineProps {
  className ?: string
}

export const HorizontalLine : React.FunctionComponent<HorizontalLineProps> = props => {
  return <hr className={concatClassNames(`maja-horizontal-line`, props.className)} />
}
