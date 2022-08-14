import React, { useState, useRef } from 'react'
import classnames from 'classnames'

import './maja-input.css'

export type InputBaseProps = {
  className ?: string
  selected ?: boolean
  disabled ?: boolean
  onClick ?: () => void
  pattern ?: string
  autoFocus ?: boolean
}

export type InputProps =
  | InputTextProps
  | InputNumberProps
  | InputCheckboxProps

export type InputTextProps = InputBaseProps & {
  type: 'text'
  value: string
  placeholder ?: string
  onChange: (value: string) => void
  onValidityChange?: (isValid: boolean) => void
}

export type InputNumberProps = InputBaseProps & {
  type: 'number'
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
  onValidityChange?: (isValid: boolean) => void
}

export type InputCheckboxProps = InputBaseProps & {
  type: 'checkbox'
  value: boolean
  onChange: (value: boolean) => void
}

export const Input : React.FunctionComponent<InputProps> = props => {
  const className = classnames({
    'maja-input': true,
    'maja-input--selected': props.selected,
    [props.className || '']: !!props.className,
  })

  const validityState = newValidityState(props)
  const value = parseInputValue(props)

  return <input
      className={className}
      onClick={!props.disabled ? props.onClick : undefined}
      disabled={props.disabled || false}
      pattern={props.pattern}
      ref={validityState?.inputRef}
      type={props.type}
      value={value}
      min={props.type === 'number' ? props.min : undefined}
      max={props.type === 'number' ? props.max : undefined}
      checked={props.type === 'checkbox' && props.value}
      placeholder={props.type === 'text' ? props.placeholder : undefined}
      autoFocus={props.autoFocus}
      onChange={ev => {
        if ( props.type === 'checkbox' ) {
          props.onChange(ev.target.checked)
          return
        }

        if (validityState) {
          handleValidity(props, validityState)
        }

        if ( props.type === 'number' ) {
          const numValue = parseInt(ev.target.value, 10)
          props.onChange(numValue)
          return
        }

        props.onChange(ev.target.value)}
      }
  />
}

function parseInputValue(props: InputProps): string|number|undefined {
  if (props.type === 'text') {
    return props.value
  }

  if (props.type === 'number') {
    if (isNaN(props.value)) {
      return ''
    }

    return props.value
  }

  return undefined
}

interface ValidityState {
  inputRef: React.RefObject<HTMLInputElement>
  isValid: boolean
  setValidity: (isValid: boolean) => void
}

function newValidityState(props: InputProps): null|ValidityState {
  if (props.type === 'checkbox') {
    return null
  }

  if (props.onValidityChange === undefined) {
    return null
  }

  const [isValid, setValidity] = useState(true)
  return {
    inputRef: useRef<HTMLInputElement>(null),
    isValid,
    setValidity,
  }
}

function handleValidity(props: InputProps, validityState: ValidityState) {
  if (props.type === 'checkbox') {
    return
  }

  if (!props.onValidityChange) {
    return
  }

  const inputDom = validityState.inputRef.current
  if (!inputDom) {
    return
  }

  const isValid = inputDom.validity.valid
  if (isValid !== validityState.isValid) {
    validityState.setValidity(isValid)
    props.onValidityChange(isValid)
  }
}
