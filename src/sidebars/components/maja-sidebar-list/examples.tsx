import React from 'react'
import { SidebarList, SidebarListProps } from '.'

export const ExampleSidebarList : React.VoidFunctionComponent<Partial<SidebarListProps>> = props => {
  return <SidebarList
    title="A list of items"
    items={[
      'First item',
      'Second item',
      'Selected item',
      'A third item',
      'A fourth item',
      'Fifth item',
      'and a sixth'
    ]}
    selectedItem={'Selected item'}
    onSelectItem={() => {}}
    {...props}
  />
}
