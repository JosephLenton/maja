import React from 'react'
import { MODAL_OVERLAY_PORTAL_TARGET } from '../../constants'
import { Card } from '@/forms'
import { Portal } from '@/portals'

import './maja-modal.css'

export interface ModalProps {
  onClose ?: () => void,
}

export const Modal : React.FunctionComponent<ModalProps> = props => {
  return <Portal target={MODAL_OVERLAY_PORTAL_TARGET} onCancel={props.onClose}>
    <div className="modal" onKeyUp={ev => {
      if ( ev.key === 'Escape' ) {
        props.onClose?.()
      }
    }}>
      <Card className="modal__content">
        {props.children}
      </Card>
    </div>
  </Portal>
}
