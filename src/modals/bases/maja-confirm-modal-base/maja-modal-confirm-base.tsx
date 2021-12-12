import React from 'react'
import { Modal } from './../../components/maja-modal'
import { Button } from '../../../buttons'
import { H2 } from '../../../headings'

import './maja-modal-confirm-base.css'

export interface MajaModalConfirmBaseProps {
  title: string
  cancelText : string
  confirmText : string
  confirmDisaled ?: boolean
  onCancel: () => void
  onConfirm: () => void
}

export const MajaModalConfirmBase : React.FunctionComponent<MajaModalConfirmBaseProps> = props => {
  return <Modal className="maja-modal-confirm-base" onClose={props.onCancel}>
    <H2>{props.title}</H2>

    {props.children && <div className="maja-modal-confirm-base__content">
      {props.children}
    </div>}

    <div className="maja-modal-confirm-base__buttons">
      <Button
        onClick={props.onCancel}
      >{props.cancelText}</Button>

      <Button
        onClick={props.onConfirm}
        disabled={props.confirmDisaled}
      >{props.confirmText}</Button>
    </div>
  </Modal>
}
