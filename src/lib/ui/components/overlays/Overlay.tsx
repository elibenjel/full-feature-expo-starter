import View, { ViewProps } from '../basic/View'

interface OverlayProps {
  visible: boolean
  content?: ViewProps['children']
}

export default function Overlay({ visible, content }: OverlayProps) {
  return visible ? (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: 10 ** 6,
        opacity: 0.7,
        pointerEvents: 'auto',
      }}
    >
      {({ dim }) => (
        <View width={dim('100cqw')} height={dim('100cqh')}>
          {content}
        </View>
      )}
    </View>
  ) : null
}
