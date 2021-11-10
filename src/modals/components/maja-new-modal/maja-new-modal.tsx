import React from 'react'
import { MajaNewNameModalBase } from './../../bases/maja-new-name-modal-base'

export interface NewModalProps {
  onSubmit: (newName: string) => void
  onCancel: () => void
}

export const NewModal : React.FunctionComponent<NewModalProps> = props => {
  return <MajaNewNameModalBase
    name=""
    displayTitle="New"
    displayName="Name"
    displaySubmit="Create"
    onSubmit={props.onSubmit}
    onCancel={props.onCancel}
  />
}
