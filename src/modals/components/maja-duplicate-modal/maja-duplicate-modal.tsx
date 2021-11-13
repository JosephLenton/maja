import React from 'react'
import { MajaNewNameModalBase } from '../../bases/maja-new-name-modal-base'

export interface DuplicateModalProps {
  name: string
  onCancel: () => void
  onConfirm: (newName: string) => void
}

export const DuplicateModal : React.VoidFunctionComponent<DuplicateModalProps> = props => {
  return <MajaNewNameModalBase
    name={props.name}
    title="Duplicate"
    displayName="Name"
    confirmText="Create"
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
  />
}
