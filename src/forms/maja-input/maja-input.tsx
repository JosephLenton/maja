import React from 'react'
import classnames from 'classnames'

import './maja-input.css'

export type InputBaseProps = {
  className ?: string
  selected ?: boolean
  disabled ?: boolean
  onClick ?: () => void
  placeholder ?: string
  inputRef ?: React.RefObject<HTMLInputElement>
  pattern ?: string
  autoFocus ?: boolean
}

export type InputProps =
  | InputBaseProps & {
    type: 'text'
    value: string
    onChange: (value: string) => void
  }
  | InputBaseProps & {
    type: 'number'
    value: number
    onChange: (value: number) => void
  }
  | InputBaseProps & {
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

  const value = parseInputValue(props)

  return <input
      className={className}
      onClick={!props.disabled ? props.onClick : undefined}
      disabled={props.disabled || false}
      pattern={props.pattern}
      ref={props.inputRef}
      type={props.type}
      value={value}
      checked={props.type === 'checkbox' && props.value}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
      onChange={ev => {
        if ( props.type === 'checkbox' ) {
          props.onChange(ev.target.checked)
          return
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
