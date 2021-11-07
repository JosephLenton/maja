import React, { useRef, useState } from 'react'
import { Button } from '../../buttons/maya-button'
import { Input } from '../input'

import './input-with-new.css'

const DEFAULT_PLACEHOLDER = 'new item'

export interface InputWithNewProps {
  className ?: string
  disabled ?: boolean
  placeholder ?: string
  pattern ?: string
  autoFocus ?: boolean

  onSubmit: (newItemName:string) => void
}

export const InputWithNew : React.FunctionComponent<InputWithNewProps> = props => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = () => {
    const inputDom = inputRef.current
    if ( ! inputDom?.validity.valid ) {
      return
    }

    const name = value.trim()
    if ( name !== '' ) {
      props.onSubmit(name)
      setValue('')
    }
  }

  return <div className="input-with-new">
    <Input
      type="text"
      value={value}
      onChange={setValue}
      inputRef={inputRef}
      disabled={props.disabled}
      placeholder={props.placeholder || DEFAULT_PLACEHOLDER}
      pattern={props.pattern}
      autoFocus={props.autoFocus}
    />

    <Button
      disabled={props.disabled}
      onClick={onSubmit}
    >+</Button>
  </div>
}
