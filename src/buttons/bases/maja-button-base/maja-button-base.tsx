import React, { PropsWithChildren } from 'react'
import classnames from 'classnames'

import './maja-button-base.css'

export type ButtonBaseProps = Omit<ButtonCoreProps, 'onClick'>
  & {
    baseClassName: string
  }
  & ({
    element?: 'button' | 'a'
    onClick ?: () => void
  } | {
    element: 'div'
  })

export interface ButtonCoreProps extends PropsWithChildren {
  className ?: string
  selected ?: boolean
  disabled ?: boolean
  onClick ?: () => void
  tooltip ?: string
}

export const ButtonBase : React.FunctionComponent<ButtonBaseProps> = props => {
  const Element = props.element || 'button'

  return <Element
      className={getClassName(props)}
      onClick={getOnClick(props)}
      disabled={getDOMDisabled(props)}
      title={props.tooltip}
  >
    {props.children}
  </Element>
}

function getClassName(props: ButtonBaseProps): string {
  const classNameRaw = {
    'maja-button-base': true,
    'maja-button-base--selected': props.selected,
    [props.baseClassName]: true,
    [`${props.baseClassName}--selected`]: props.selected,
    [`${props.baseClassName}--disabled`]: props.disabled,
  }

  if (props.className) {
    props.className.split(/ +/g).forEach(className => {
      classNameRaw[className] = true
      classNameRaw[`${className}--selected`] = props.selected
    })
  }

  return classnames(classNameRaw)
}

function getDOMDisabled(props: ButtonBaseProps): undefined|boolean {
  if (props.element === 'div') {
    return false
  }

  return props.disabled
}

function getOnClick(props: ButtonBaseProps): undefined|(() => void) {
  if (props.element === 'div') {
    return undefined
  }

  if (props.disabled) {
    return undefined
  }

  return props.onClick
}
