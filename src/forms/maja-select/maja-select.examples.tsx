import React, { useState } from "react"
import { Select, SelectProps } from "./maja-select"

const EXAMPLE_OPTIONS = [
  {
    text: 'Giraffe 🦒',
    id: 'giraffe',
  },
  {
    text: 'Penguin 🐧',
    id: 'penguin',
  },
  {
    text: 'Horse 🐴',
    id: 'horse',
  },
  {
    text: 'Cat 🐱',
    id: 'cat',
  },
]

export const SelectExample = (props: Partial<SelectProps<string>>): React.ReactElement => {
  const [selectedID, setSelectedID] = useState(props.selectedID)

  return <Select
    options={EXAMPLE_OPTIONS}
    placeholder="Select Animal"
    selectedID={selectedID}
    onSelect={setSelectedID}
    {...props}
  />
}
