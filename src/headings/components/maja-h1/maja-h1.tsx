import React from 'react'
import { HBase, HCoreProps } from '~headings/bases/h-base'

import './maja-h1.css'

export interface H1Props extends HCoreProps {
}

export const H1 : React.FunctionComponent<H1Props> = props => {
  return <HBase
      baseClassName="maja-h1"
      baseElementTag="h1"
      {...props}
  >
    {props.children}
  </HBase>
}
