import React from 'react'

import './horizontal-line.css'

export interface HorizontalLineProps {
}

export const HorizontalLine : React.FunctionComponent<HorizontalLineProps> = () => {
  return <hr className={`horizontal-line`} />
}
