import React, { useEffect, useRef, useState } from 'react'

export interface ModalPortalTargetProps {
  element ?: 'div' | 'section' | 'article' | 'span'
  name: string
  className ?: string
}

export const PortalTarget : React.FunctionComponent<ModalPortalTargetProps> = props => {
  const El = props.element || 'div'

  return <El
    className={props.className}
    id={props.name}
    ref={assertNoDuplicatePortal(props)}
  />
}

function assertNoDuplicatePortal(
  props: ModalPortalTargetProps,
):React.MutableRefObject<null> {
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

  return portalRef
}