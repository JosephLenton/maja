import React from 'react'
import classnames from 'classnames'

import './maja-select.css'

export interface SelectProps<V extends React.Key> {
  className ?: string
  readonly options : SelectOptionProps<V>[]
  onSelect : (value:V) => void
  selected ?: V
}

export interface SelectOptionProps<V extends React.Key> {
  readonly value : V
  readonly text : string
}

export const Select = <V extends React.Key>(props: SelectProps<V>): React.ReactElement => {
  const baseClass = `maja-select`

  console.log(props.options)
  return <select
    value={props.selected}
    className={classnames({
      [baseClass]: true,
      [props.className || '']: !!props.className,
    })}
    onSelect={() => {
      console.log('dropdown select')
    }}
  >
    {props.options.map(option => {
      return <option
        className="maja-select__option"
        key={option.value}
        value={option.value}
        onSelect={() => {
          console.log('option select')
        }}
      >{option.text}</option>
    })}
  </select>
}
