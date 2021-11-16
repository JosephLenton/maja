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
    'maja-button-base--disabled': props.disabled,
    [props.baseClassName]: true,
    [`${props.className}--selected`]: props.selected,
    [`${props.className}--disabled`]: props.disabled,
  }

  if (props.className) {
    props.className.split(/ +/g).forEach(className => {
      classNameRaw[className] = true
      classNameRaw[`${className}--selected`] = props.selected
      classNameRaw[`${className}--disabled`] = props.disabled
    })
  }

  return classnames(classNameRaw)
}
