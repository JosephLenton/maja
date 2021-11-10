import React from 'react'
import { MajaNewNameModalBase } from '../../bases/maja-new-name-modal-base'

export interface DuplicateModalProps {
  name: string
  onSubmit: (newName: string) => void
  onCancel: () => void
}

export const DuplicateModal : React.FunctionComponent<DuplicateModalProps> = props => {
  return <MajaNewNameModalBase
    name={props.name}
    title="Duplicate"
    displayName="Name"
    submitText="Create"
    onSubmit={props.onSubmit}
    onCancel={props.onCancel}
  />
}
