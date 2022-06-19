import React from 'react'
import { concatClassNames } from '@maja-ui/util'

import './maja-horizontal-rule.css'

export interface HorizontalRuleProps {
  className ?: string
}

export const HorizontalRule : React.FunctionComponent<HorizontalRuleProps> = props => {
  return <hr className={concatClassNames(`maja-horizontal-rule`, props.className)} />
}
