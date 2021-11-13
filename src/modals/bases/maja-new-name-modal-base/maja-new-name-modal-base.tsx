import React, { useState } from 'react'
import { MajaModalConfirmBase } from '../maja-confirm-modal-base'
import { Label } from '@/forms'
import { Input } from '@/forms'
import { Form } from '@/forms'

export interface MajaNewNameModalBaseProps {
  title: string
  displayName: string
  confirmText: string
  name: string
  onCancel: () => void
  onConfirm: (newName: string) => void
}

export const MajaNewNameModalBase : React.VoidFunctionComponent<MajaNewNameModalBaseProps> = props => {
  const [newName, setNewName] = useState(props.name)
  const runConfirm = () => props.onConfirm(newName)

  return <MajaModalConfirmBase
    title={props.title}
    cancelText="Cancel"
    confirmText={props.confirmText}
    confirmDisaled={newName === ''}
    onCancel={props.onCancel}
    onConfirm={runConfirm}
  >
    <Form onSubmit={runConfirm}>
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
