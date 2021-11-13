import React, { useEffect, useRef, useState } from 'react'

export interface ModalPortalTargetProps {
  element ?: 'div' | 'section' | 'article' | 'span'
  name: string
  className ?: string
}

export const PortalTarget : React.VoidFunctionComponent<ModalPortalTargetProps> = props => {
  const El = props.element || 'div'

  const portalRef = useRef<null>(null)
  useEffect(() => {
    if (!portalRef.current) {
      return
    }

    const currentPortal = document.getElementById(props.name)
    if (currentPortal !== portalRef.current) {
      throw new Error(`Duplicate portal target found for ... '${props.name}'`)
    }
  }, [portalRef])

  return <El
    className={props.className}
    id={props.name}
    ref={portalRef}
  />
}
