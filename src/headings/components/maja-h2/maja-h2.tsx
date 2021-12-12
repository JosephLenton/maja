import React from 'react'
import { HBase, HCoreProps } from '../../bases/h-base'

import './maja-h2.css'

export interface H2Props extends HCoreProps {
}

export const H2 : React.FunctionComponent<H2Props> = props => {
  return <HBase
      baseClassName="maja-h2"
      baseElementTag="h2"
      {...props}
  >
    {props.children}
  </HBase>
}
