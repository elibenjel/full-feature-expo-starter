import * as React from 'react'

interface ChildrenArgs {
  hovered: boolean
}

interface Props {
  children: (args: ChildrenArgs) => React.ReactElement<{
    onPointerEnter: () => void
    onPointerLeave: () => void
  }>
}

export default function InteractionHandler(props: Props) {
  const { children } = props
  const [hovered, setHovered] = React.useState(false)

  return React.cloneElement(children({ hovered }), {
    onPointerEnter: () => setHovered(true),
    onPointerLeave: () => setHovered(false),
  })
}
