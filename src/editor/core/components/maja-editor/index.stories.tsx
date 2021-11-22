import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Editor } from './index'
import { ExampleFullEditor, ExamplePartialEditor } from './examples'
import { ExampleEditorCard } from '../maja-editor-card/examples'
import { ExampleEditorZoomControls } from '../../../complex/components/maja-editor-zoom-controls/examples'
import { Point2D } from '@maja-ui/util'

export default {
  title: 'Editor/Editor',
  component: Editor,
  argTypes: {},
  parameters: {
    decorator: 'main',
  },
} as ComponentMeta<typeof Editor>

export const FullExample = ExampleFullEditor.bind({})
FullExample.args = {
  children: [
    <ExamplePointerCanvas />,

    <div style={{ position: 'relative', left: '24px', top: '24px' }}>
      {ExampleEditorCard({})}
    </div>,

    <div style={{ position: 'absolute', right: '24px', bottom: '24px' }}>
      {ExampleEditorZoomControls({})}
    </div>,
  ]
}

export const BasicWithSidebarAndTopbar = ExamplePartialEditor.bind({})

export const BasicWithSidebar = ExamplePartialEditor.bind({})
BasicWithSidebar.args = {
  topbarChild: undefined,
}

export const BasicWithTopbar = ExamplePartialEditor.bind({})
BasicWithTopbar.args = {
  sidebarChild: undefined,
}

export const Default = Editor.bind({})

function ExamplePointerCanvas() {
  const [position, setPosition] = useState<null|Point2D>(null)

  return <div
    onMouseMove={ev => {
      const dom = ev.target as HTMLDivElement
      const rect = dom.getBoundingClientRect()

      setPosition({
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top,
      })
    }}
      style={{ position: 'relative', width: '100%', height: '100%', background: 'pink' }}
  >
    {position && <div style={{
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      borderRadius: '50%',
      position: 'absolute',
      left: `${position.x}px`, top: `${position.y}px`,
      width: '24px', height: '24px',
      background: 'red',
    }} />}
  </div>
}
