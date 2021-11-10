import React, { useState } from 'react'
import { MajaModalConfirmBase } from '../maja-confirm-modal-base'
import { Label } from '@/forms'
import { Input } from '@/forms'
import { Form } from '@/forms'

export interface MajaNewNameModalBaseProps {
  title: string
  displayName: string
  submitText: string
  name: string
  onSubmit: (newName: string) => void
  onCancel: () => void
}

export const MajaNewNameModalBase : React.FunctionComponent<MajaNewNameModalBaseProps> = props => {
  const [newName, setNewName] = useState(props.name)
  const runSubmit = () => props.onSubmit(newName)

  return <MajaModalConfirmBase
    title={props.title}
    cancelText="Cancel"
    confirmText={props.submitText}
    confirmDisaled={newName === ''}
    onCancel={props.onCancel}
    onSubmit={runSubmit}
  >
    <Form onSubmit={runSubmit}>
      <Label>
        {props.displayName}
        <Input
          type="text"
          value={newName}
          onChange={n => setNewName(n)}
          autoFocus
        />
      </Label>
    </Form>
  </MajaModalConfirmBase>
}
