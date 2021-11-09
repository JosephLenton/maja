import React from 'react'
import { MODAL_OVERLAY_PORTAL_TARGET } from '../../constants'
import { PortalTarget } from '@/portals'

import './maja-modal-overlay-target.css'

export interface ModalOverlayTargetProps {
}

export const ModalOverlayTarget : React.FunctionComponent<ModalOverlayTargetProps> = () => {
  return <PortalTarget className="maja-modal-overlay-target" name={MODAL_OVERLAY_PORTAL_TARGET} />
}
