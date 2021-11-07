import React from 'react'
import classnames from 'classnames'

import './h-base.css'

export interface HBaseProps extends HCoreProps {
  baseClassName: string
  baseElementTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface HCoreProps {
  className ?: string
}

export const HBase : React.FunctionComponent<HBaseProps> = props => {
  const className = classnames({
    'h-base': true,
    [props.baseClassName]: true,
    [`${props.className}`]: !! props.className,
  })

  const HeadingElementTag = props.baseElementTag
  return <HeadingElementTag
      className={className}
  >
    {props.children}
  </HeadingElementTag>
}
