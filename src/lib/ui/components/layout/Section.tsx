import Text, { TextProps } from '../basic/Text'
import View, { ViewProps } from '../basic/View'
import Surface, { SurfaceProps } from './Surface'

interface Props {
  title: string
  titleProps?: TextProps
  titleContainerProps?: ViewProps
  actionElement?: React.ReactNode
  children: React.ReactNode
}

export type SectionProps = Props & SurfaceProps

export default function Section({
  children,
  title,
  titleProps,
  titleContainerProps,
  actionElement,
  ...props
}: SectionProps) {
  return (
    <Surface {...props}>
      <View
        row
        bg-$backgroundPrimaryLight
        width="100%"
        paddingH-16
        paddingV-8
        {...titleContainerProps}
      >
        <Text flex text60 {...titleProps}>
          {title}
        </Text>
        {actionElement}
      </View>
      {children}
    </Surface>
  )
}
