import React, { useState } from "react"
import { SidebarSelect, SidebarSelectProps } from "./maja-sidebar-select"

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

export const SidebarSelectExample = (props: Partial<SidebarSelectProps<string>>): React.ReactElement => {
  const [selectedID, setSelectedID] = useState(props.selectedID)

  return <SidebarSelect
    options={EXAMPLE_OPTIONS}
    placeholder="Pick Animal"
    selectedID={selectedID}
    onSelect={setSelectedID}
    {...props}
  />
}
