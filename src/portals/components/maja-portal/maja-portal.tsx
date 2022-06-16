import React, { PropsWithChildren, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const CANCEL_FUNCTIONS : Map<string, () => void> = new Map()

export interface PortalProps extends PropsWithChildren {
  target: string
  onUnmount ?: () => void
}

export const Portal : React.FunctionComponent<PortalProps> = props => {
  const [targetDom, setTargetDom] = useState<HTMLElement|null>(null)

  useEffect(() => {
    const dom = document.getElementById(props.target)
    if (!dom) {
      throw new Error(`Target portal '${props.target} not found`)
    }

    if (!(dom instanceof HTMLElement)) {
      throw new Error(`Target portal '${props.target} is not a HTML Element`)
    }

    CANCEL_FUNCTIONS.get(props.target)?.()
    if (props.onUnmount) {
      CANCEL_FUNCTIONS.set(props.target, props.onUnmount)
    } else {
      CANCEL_FUNCTIONS.delete(props.target)
    }

    setTargetDom(dom)

    return () => {
      if (!props.onUnmount) {
        return
      }

      if (CANCEL_FUNCTIONS.get(props.target) !== props.onUnmount) {
        return
      }

      CANCEL_FUNCTIONS.delete(props.target)
    }
  })

  if (!targetDom) {
    return <></>
  }

  return ReactDOM.createPortal(<>{props.children}</>, targetDom)
}
