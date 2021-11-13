import React from 'react'
import { P } from '@/text'
import { MajaModalConfirmBase } from '../../bases/maja-confirm-modal-base'

export interface ConfirmMessageModalProps {
  title: string
  message ?: string
  onCancel: () => void
  onConfirm: () => void
}

export const ConfirmMessageModal : React.VoidFunctionComponent<ConfirmMessageModalProps> = props => {
  return <MajaModalConfirmBase
    title={props.title}
    cancelText="Cancel"
    confirmText="Confirm"
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
  >
    {props.message && <P>{props.message}</P>}
  </MajaModalConfirmBase>
}
