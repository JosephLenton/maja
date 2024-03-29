import React, { useState } from 'react'
import classnames from 'classnames'
import { Button, LinkButton } from '../../buttons'
import { Card } from '../../surfaces'

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
  const baseClass = `maja-dropdown`
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
      <span className="maja-dropdown__button-text">
        {props.children}
        <span className="maja-dropdown__button-dots">⋯</span>
      </span>
    </Button>

    {isOpen && <Card className="maja-dropdown__list">
      <ul className="maja-dropdown__items">
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
