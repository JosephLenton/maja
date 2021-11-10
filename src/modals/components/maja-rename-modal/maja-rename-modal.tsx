import React from 'react'
import { MajaNewNameModalBase } from '../../bases/maja-new-name-modal-base'

export interface RenameModalProps {
  name: string
  onSubmit: (newName: string) => void
  onCancel: () => void
}

export const RenameModal : React.FunctionComponent<RenameModalProps> = props => {
  return <MajaNewNameModalBase
    name={props.name}
    title="Rename"
    displayName="Name"
    submitText="Apply"
    onSubmit={props.onSubmit}
    onCancel={props.onCancel}
  />
}
