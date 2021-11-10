import React from 'react'

import './maja-list-base.css'

export interface ListBaseProps extends ListBaseCoreProps {
  baseClassName: string
}

export interface ListBaseCoreProps {
  className ?: string
  items : ListBaseItem[]
}

export interface ListBaseItem {
  key: string
  component: React.ReactNode
}

export const ListBase : React.FunctionComponent<ListBaseProps> = props => {
  return <div className={`maja-list-base ${props.baseClassName} ${props.className || ''}`}>
    {props.items.map(item => {
      return <div className="maja-list-base__item" key={item.key}>
        {item.component}
      </div>
    })}

    {props.children}
  </div>
}
