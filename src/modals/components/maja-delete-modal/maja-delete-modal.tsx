import React from 'react'
import { ConfirmMessageModal } from '@/modals'

export interface DeleteModalProps {
  name: string
  numUses ?: number
  onSubmit: () => void
  onCancel: () => void
}

export const DeleteModal : React.FunctionComponent<DeleteModalProps> = props => {
  return <ConfirmMessageModal
    title={generateTitle(props)}
    message={generateMessage(props)}
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
  />
}

function generateTitle(props: DeleteModalProps):string {
  return `Are you sure you want to delete '${props.name}'?`
}

function generateMessage(props: DeleteModalProps):string|undefined {
  if (props.numUses === undefined) {
    return undefined
  }

  if (props.numUses <= 0) {
    return `It is not in use anywhere`
  }

  if (props.numUses === 1) {
    return `It is used in ${props.numUses} place`
  }

  return `It is used in ${props.numUses} places`
}
