import React from 'react'

import './horizontal-rule.css'

export interface HorizontalRuleProps {
}

export const HorizontalRule : React.FunctionComponent<HorizontalRuleProps> = () => {
  return <hr className={`horizontal-rule`} />
}
