import React from 'react'
import { ListBase } from '@/forms/bases/maja-list-base'
import { Button } from '@/buttons/maja-button'

import './maja-list.css'

export interface ListProps {
  items : string[]
  selected ?: string
  onSelect : ( item : string ) => void
}

export const List : React.FunctionComponent<ListProps> = props => {
  return <ListBase
    baseClassName="list"
    items={props.items.map(item => ({
      key: item,
      component: <Button
        className="list__button"
        selected={item === props.selected}
        onClick={() => props.onSelect(item)}
      >{item}</Button>,
    }))}
  />
}
