import React from "react"
import { Select, SelectProps } from "./maja-select"

const EXAMPLE_OPTIONS = [
  {
    text: 'Giraffe 🦒',
    value: 'giraffe',
  },
  {
    text: 'Penguin 🐧',
    value: 'penguin',
  },
  {
    text: 'Horse 🐴',
    value: 'horse',
  },
  {
    text: 'Cat 🐱',
    value: 'cat',
  },
]

export const SelectExample = (props: Partial<SelectProps<string>>): React.ReactElement => {
  return <Select
    options={EXAMPLE_OPTIONS}
    onSelect={() => {}}
    {...props}
  />
}
