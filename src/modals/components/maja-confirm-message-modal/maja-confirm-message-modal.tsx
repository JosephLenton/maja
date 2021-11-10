import React from 'react'
import { P } from '@/text'
import { MajaModalConfirmBase } from '../../bases/maja-confirm-modal-base'

export interface ConfirmMessageModalProps {
  title: string
  message ?: string
  onSubmit: () => void
  onCancel: () => void
}

export const ConfirmMessageModal : React.FunctionComponent<ConfirmMessageModalProps> = props => {
  return <MajaModalConfirmBase
    title={props.title}
    cancelText="Cancel"
    confirmText="Confirm"
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
  >
    {props.message && <P>{props.message}</P>}
  </MajaModalConfirmBase>
}
