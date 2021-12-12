import React from 'react'
import { MODAL_OVERLAY_PORTAL_TARGET } from '../../constants'
import { Card } from '../../../surfaces'
import { Portal } from '../../../portals'
import { concatClassNames } from '@maja-ui/util'

import './maja-modal.css'

export interface ModalProps {
  className ?: string

  onClose ?: () => void,
}

export const Modal : React.FunctionComponent<ModalProps> = props => {
  return <Portal target={MODAL_OVERLAY_PORTAL_TARGET} onUnmount={props.onClose}>
    <Card className={concatClassNames("maja-modal", props.className)} onKeyUp={ev => {
      if ( ev.key === 'Escape' ) {
        props.onClose?.()
      }
    }}>
      {props.children}
    </Card>
  </Portal>
}
