import React from 'react'

import './maja-horizontal-line.css'

export interface HorizontalLineProps {
}

export const HorizontalLine : React.FunctionComponent<HorizontalLineProps> = () => {
  return <hr className={`horizontal-line`} />
}
