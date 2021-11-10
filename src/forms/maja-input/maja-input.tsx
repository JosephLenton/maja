import React from 'react'
import classnames from 'classnames'
import './maja-input.css'

type BaseProps = {
  className ?: string
  selected ?: boolean
  disabled ?: boolean
  onClick ?: () => void
  placeholder ?: string
  inputRef ?: React.RefObject<HTMLInputElement>
  pattern ?: string
  autoFocus ?: boolean
}

type InputProps =
  | BaseProps & {
    type: 'text'
    value: string
    onChange: (value: string) => void
  }
  | BaseProps & {
    type: 'number'
    value: number
    onChange: (value: number) => void
  }
  | BaseProps & {
    type: 'checkbox'
    value: boolean
    onChange: (value: boolean) => void
  }

export const Input : React.FunctionComponent<InputProps> = props => {
  const className = classnames({
    'maja-input': true,
    'maja-input--selected': props.selected,
    'maja-input--disabled': props.disabled,
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
