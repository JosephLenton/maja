import React, { PropsWithChildren } from 'react'
import { MajaModalConfirmBase } from './../../bases/maja-confirm-modal-base'

export interface ConfirmModalProps extends PropsWithChildren {
  title: string
  cancelText ?: string
  confirmText ?: string
  confirmDisaled ?: boolean
  onCancel: () => void
  onConfirm: () => void
}

export const ConfirmModal : React.FunctionComponent<ConfirmModalProps> = props => {
  return <MajaModalConfirmBase
    title={props.title}
    cancelText={props.cancelText || "Cancel"}
    confirmText={props.confirmText || "Confirm"}
    confirmDisaled={props.confirmDisaled}
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
  >
    {props.children}
  </MajaModalConfirmBase>
}
