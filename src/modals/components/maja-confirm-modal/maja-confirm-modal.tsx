import React from 'react'
import { Modal } from '@/modals'
import { Button } from '@/buttons'
import { H2 } from '@/headings'
import { P } from '@/text'

import './maja-confirm-modal.css'

export interface ConfirmModalProps {
  title: string
  message ?: string
  onSubmit: () => void
  onCancel: () => void
}

export const ConfirmModal : React.FunctionComponent<ConfirmModalProps> = props => {
  return <Modal className="maja-confirm-modal">
    <H2>{props.title}</H2>

    {props.message && <P className="maja-confirm-modal__message">
      {props.message}
    </P>}

    <div className="maja-confirm-modal__buttons">
      <Button
        onClick={props.onCancel}
      >Cancel</Button>

      <Button
        onClick={props.onSubmit}
      >Confirm</Button>
    </div>
  </Modal>
}
