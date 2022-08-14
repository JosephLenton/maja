import React, { useRef, useState } from 'react'
import { Button } from '../../buttons/maja-button'
import { Input } from '../maja-input'

import './maja-input-with-new.css'

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
  const [isValid, setValid] = useState(true)

  const onSubmit = () => {
    if (!isValid) {
      return
    }

    const name = value.trim()
    if ( name !== '' ) {
      props.onSubmit(name)
      setValue('')
    }
  }

  return <div className="maja-input-with-new">
    <Input
      type="text"
      value={value}
      onChange={setValue}
      onValidityChange={setValid}
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
