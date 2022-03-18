import React from 'react'
import classNames from 'classnames'

import './maja-select.css'

export interface SelectProps<V extends React.Key> {
  className ?: string
  readonly options : SelectOptionProps<V>[]
  onSelect : (value:V) => void
  selectedID ?: V
  disabled ?: boolean
  placeholder ?: string
}

export interface SelectOptionProps<V extends React.Key> {
  readonly text : string
  readonly id : V
}

export const Select = <V extends React.Key>(props: SelectProps<V>): React.ReactElement => {
  const hasPlaceholder = props.selectedID === undefined || props.options.find(option => option.id === props.selectedID) === undefined

  return <select
    value={props.selectedID}
    disabled={props.disabled}
    className={classNames({
      'maja-select': true,
      'maja-select--placeholder': hasPlaceholder,
      [props.className || '']: !!props.className,
    })}
    onChange={ev => props.onSelect(ev.target.value as V)}
  >
    {hasPlaceholder && <option
      className="maja-select__option"
      disabled
      selected
      hidden
    >{props.placeholder}</option>}

    {props.options.map(option => {
      return <option
        className="maja-select__option"
        key={option.id}
        value={option.id}
      >{option.text}</option>
    })}
  </select>
}
