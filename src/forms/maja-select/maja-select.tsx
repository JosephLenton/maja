import React from 'react'
import { concatClassNames } from '@maja-ui/util'

import './maja-select.css'

export interface SelectProps<V extends React.Key> {
  className ?: string
  readonly options : SelectOptionProps<V>[]
  onSelect : (value:V) => void
  selected ?: V
  disabled ?: boolean
}

export interface SelectOptionProps<V extends React.Key> {
  readonly value : V
  readonly text : string
}

export const Select = <V extends React.Key>(props: SelectProps<V>): React.ReactElement => {
  return <select
    value={props.selected}
    disabled={props.disabled}
    className={concatClassNames('maja-select', props.className)}
    onChange={ev => props.onSelect(ev.target.value as V)}
  >
    {props.options.map(option => {
      return <option
        className="maja-select__option"
        key={option.value}
        value={option.value}
      >{option.text}</option>
    })}
  </select>
}
