import React from 'react'
import { HBase, HCoreProps } from '@/headings/bases/h-base'

import './maja-h0.css'

export interface H0Props extends HCoreProps {
}

export const H0 : React.FunctionComponent<H0Props> = props => {
  return <HBase
      baseClassName="maja-h0"
      baseElementTag="h1"
      {...props}
  >
    {props.children}
  </HBase>
}
