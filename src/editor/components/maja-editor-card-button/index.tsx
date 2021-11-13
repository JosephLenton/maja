import React from 'react'
import { ButtonBase, ButtonCoreProps } from './../../../buttons/bases/maja-button-base'

import './style.css'

export interface EditorCardButtonProps extends ButtonCoreProps {
  className ?: string
}

export const EditorCardButton : React.FunctionComponent<EditorCardButtonProps> = props => {
  return <ButtonBase
      baseClassName="maja-editor-card-button"
      {...props}
  >
    {props.children}
  </ButtonBase>
}
