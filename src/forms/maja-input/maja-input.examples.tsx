import React, { useState } from "react"
import { Input, InputCheckboxProps, InputNumberProps, InputTextProps } from "./maja-input"

export const InputNumberExample = (props: Partial<InputNumberProps>): React.ReactElement => {
  const [value, setValue] = useState(props.value || 0)

  return <Input
    type="number"
    value={value}
    onChange={setValue}
    {...props}
  />
}

export const InputTextExample = (props: Partial<InputTextProps>): React.ReactElement => {
  const [value, setValue] = useState(props.value || '')

  return <Input
    type="text"
    value={value}
    onChange={setValue}
    {...props}
  />
}

export const InputCheckboxExample = (props: Partial<InputCheckboxProps>): React.ReactElement => {
  const [value, setValue] = useState(props.value || false)

  return <Input
    type="checkbox"
    value={value}
    onChange={setValue}
    {...props}
  />
}
