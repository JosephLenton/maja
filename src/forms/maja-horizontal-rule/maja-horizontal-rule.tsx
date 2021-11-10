import React from 'react'

import './maja-horizontal-rule.css'

export interface HorizontalRuleProps {
}

export const HorizontalRule : React.FunctionComponent<HorizontalRuleProps> = () => {
  return <hr className={`maja-horizontal-rule`} />
}
