import React from 'react'
import { MajaNewNameModalBase } from '../../bases/maja-new-name-modal-base'

export interface NewModalProps {
  onCancel: () => void
  onConfirm: (newName: string) => void
}

export const NewModal : React.FunctionComponent<NewModalProps> = props => {
  return <MajaNewNameModalBase
    name=""
    title="New"
    displayName="Name"
    confirmText="Create"
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
  />
}
