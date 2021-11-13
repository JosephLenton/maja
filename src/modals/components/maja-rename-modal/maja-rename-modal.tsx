import React from 'react'
import { MajaNewNameModalBase } from '../../bases/maja-new-name-modal-base'

export interface RenameModalProps {
  name: string
  onCancel: () => void
  onConfirm: (newName: string) => void
}

export const RenameModal : React.VoidFunctionComponent<RenameModalProps> = props => {
  return <MajaNewNameModalBase
    name={props.name}
    title="Rename"
    displayName="Name"
    confirmText="Apply"
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
  />
}
