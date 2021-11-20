import React from 'react'
import classnames from 'classnames'

import './maja-button-base.css'

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
  const className = buildClassName(props)
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

function buildClassName(props: ButtonBaseProps): string {
  const classNameRaw = {
    'maja-button-base': true,
    'maja-button-base--selected': props.selected,
    [props.baseClassName]: true,
    [`${props.baseClassName}--selected`]: props.selected,
  }

  if (props.className) {
    props.className.split(/ +/g).forEach(className => {
      classNameRaw[className] = true
      classNameRaw[`${className}--selected`] = props.selected
    })
  }

  return classnames(classNameRaw)
}
