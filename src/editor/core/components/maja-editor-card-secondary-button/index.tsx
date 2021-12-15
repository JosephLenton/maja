import React from 'react'
import { ButtonBase, ButtonCoreProps } from '../../../../buttons/bases/maja-button-base'

import './style.css'

export interface EditorCardSecondaryButtonProps extends ButtonCoreProps {
  className ?: string
}

export const EditorCardSecondaryButton : React.FunctionComponent<EditorCardSecondaryButtonProps> = props => {
  return <ButtonBase
      baseClassName="maja-editor-card-secondary-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
