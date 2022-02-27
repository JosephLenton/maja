import React from 'react'
import { MajaNewNameModalBase } from '../../bases/maja-new-name-modal-base'

export interface NewModalProps {
  title?: string
  fieldLabel?: string
  confirmText?: string
  onCancel: () => void
  onConfirm: (newName: string) => void
}

export const NewModal : React.VoidFunctionComponent<NewModalProps> = props => {
  return <MajaNewNameModalBase
    name=""
    title={props.title || "New"}
    displayName={props.fieldLabel || "Name"}
    confirmText={props.confirmText || "Create"}
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
  />
}
