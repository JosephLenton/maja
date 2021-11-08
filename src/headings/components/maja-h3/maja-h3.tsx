import React from 'react'
import { HBase, HCoreProps } from '@/headings/bases/h-base'

import './maja-h3.css'

export interface H3Props extends HCoreProps {
}

export const H3 : React.FunctionComponent<H3Props> = props => {
  return <HBase
      baseClassName="maja-h3"
      baseElementTag="h3"
      {...props}
  >
    {props.children}
  </HBase>
}
