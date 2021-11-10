import React, { useState } from 'react'
import { Modal } from '@/modals'
import { Button } from '@/buttons'
import { Label } from '@/forms'
import { Input } from '@/forms'
import { Form } from '@/forms'

import './maja-new-name-modal-base.css'

export interface MajaNewNameModalBaseProps {
  displayTitle: string
  displayName: string
  displaySubmit: string
  name: string
  onSubmit: (newName: string) => void
  onCancel: () => void
}

export const MajaNewNameModalBase : React.FunctionComponent<MajaNewNameModalBaseProps> = props => {
  const [newName, setNewName] = useState(props.name)
  const runSubmit = () => props.onSubmit(newName)

  return <Modal onClose={props.onCancel}>
    <h2>{props.displayTitle}</h2>

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

    <Button
      className="maja-new-name-modal-base__confirm"
      disabled={newName === ''}
      onClick={runSubmit}
    >{props.displaySubmit}</Button>
  </Modal>
}
