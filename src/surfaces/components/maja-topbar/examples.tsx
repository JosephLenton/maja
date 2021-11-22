import React from 'react'
import { Topbar, TopbarProps } from './maja-topbar'
import { P } from './../../../text/components/maja-p'

export const ExampleTopbar : React.FunctionComponent<Partial<TopbarProps>> = props => {
  return <Topbar {...props}>
    <P>I am an example topbar</P>
  </Topbar>
}
