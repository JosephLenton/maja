import React from 'react'
import classnames from 'classnames'

import './maya-button-base.css'

export interface ButtonBaseProps extends ButtonCoreProps {
  element?: 'div' | 'button' | 'a'
  baseClassName: string
}

export interface ButtonCoreProps {
  className ?: string
  selected ?: boolean
  disabled ?: boolean
  onClick ?: () => void
  tooltip ?: string
}

export const ButtonBase : React.FunctionComponent<ButtonBaseProps> = props => {
  const className = classnames({
    'maya-button-base': true,
    'maya-button-base--selected': props.selected,
    'maya-button-base--disabled': props.disabled,
    [props.baseClassName]: true,
    [`${props.baseClassName}--selected`]: props.selected,
    [`${props.baseClassName}--disabled`]: props.disabled,
    [`${props.className}`]: !! props.className,
  })

  const Element = props.element || 'button'

  return <Element
      className={className}
      onClick={!props.disabled ? props.onClick : undefined}
      disabled={!! props.disabled}
      title={props.tooltip}
  >
    {props.children}
  </Element>
}
