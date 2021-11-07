import React, { useState } from 'react'
import { Button } from "~buttons/maja-button"
import classnames from 'classnames'
import { Card } from '~forms/maja-card'
import { LinkButton } from '~buttons/maja-link-button'

import './maja-dropdown.css'

export interface DropdownProps<V extends React.Key> {
  className ?: string
  children : string
  readonly options : DropdownOptionProps<V>[]
  onSelect : (value:V) => void
}

export interface DropdownOptionProps<V extends React.Key> {
  readonly value : V
  readonly text : string
  readonly isSelected ?: boolean
}

export const Dropdown = <V extends React.Key>(props: DropdownProps<V>): React.ReactElement => {
  const baseClass = `dropdown`
  const [isOpen, setOpen] = useState(false)

  return <div className={classnames({
    [baseClass]: true,
    [`${baseClass}--open`]: isOpen,
    [props.className || '']: !!props.className,
  })}>
    <Button
      className={`${baseClass}__button`}
      selected={isOpen}
      onClick={() => setOpen(!isOpen)}
    >
      <span className="dropdown__button-text">
        {props.children}
        <span className="dropdown__button-dots">⋯</span>
      </span>
    </Button>

    {isOpen && <Card className="dropdown__list" padding="small">
      <ul className="dropdown__items">
        {props.options.map(option => {
          return <li key={option.value}>
            <LinkButton
              onClick={() => {
                setOpen(false)
                props.onSelect(option.value)
              }}
              selected={option.isSelected}
            >{option.text}</LinkButton>
          </li>
        })}
      </ul>
    </Card>}
  </div>
}
