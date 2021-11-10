import React from 'react'
import { MajaModalConfirmBase } from './../../bases/maja-confirm-modal-base'

export interface ConfirmModalProps {
  title: string
  cancelText ?: string
  confirmText ?: string
  confirmDisaled ?: boolean
  onSubmit: () => void
  onCancel: () => void
}

export const ConfirmModal : React.FunctionComponent<ConfirmModalProps> = props => {
  return <MajaModalConfirmBase
    title={props.title}
    cancelText={props.cancelText || "Cancel"}
    confirmText={props.confirmText || "Confirm"}
    confirmDisaled={props.confirmDisaled}
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
  >
    {props.children}
  </MajaModalConfirmBase>
}
