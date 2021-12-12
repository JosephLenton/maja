import React from 'react'
import { CollapsableSidebar, CollapsableSidebarProps } from '.'
import { SidebarButton } from '../maja-sidebar-button'
import { NewButton } from '../../../buttons'

const ANIMALS = [
  "Donkeys",
  "Kittens",
  "Camels",
  "Oxen",
  "Pandas",
  "Mountain Goats",
  "Dogs",
  "Sheep",
  "Pigs",
  "Giraffes",
  "Alpacas",
  "Emus",
  "Eagles",
  "Goldfish",
  "Puppies",
]

export const ExampleLongCollapsableSidebar : React.FunctionComponent<Partial<CollapsableSidebarProps>> = props => {
  return <CollapsableSidebar title="Animals" {...props}>
    {ANIMALS.map(animal => {
      return <SidebarButton key={animal}>{animal}</SidebarButton>
    })}

    <NewButton />
  </CollapsableSidebar>
}
