import {
  Blur,
  Canvas,
  Image as SkiaImage,
  ImageProps as SkiaImageProps,
} from '@shopify/react-native-skia'

import * as React from 'react'

import useImage from '../../hooks/useImage'
import Text from '../basic/Text'
import View, { ViewProps } from '../basic/View'

interface ImageProps extends ViewProps {
  uri: string | undefined
  alt?: string
  fit?: SkiaImageProps['fit']
  blur?: number
}

export default function Image({ uri, alt, fit = 'contain', blur, ...props }: ImageProps) {
  const { data: image, isPending, error } = useImage(uri)

  return (
    <View width="100%" height="100%" {...props}>
      {({ dim }) => {
        if (isPending) {
          return <View skeleton width="100%" height="100%" />
        }

        if (!image || error) {
          if (error) {
            console.error('Error loading image:', error.message)
          }
          return (
            <View width="100%" height="100%" center>
              <Text center>{alt ?? 'No image'}</Text>
            </View>
          )
        }
        return (
          <Canvas style={{ width: '100%', height: '100%' }}>
            <SkiaImage
              image={image}
              x={0}
              y={0}
              width={dim('100cqw')}
              height={dim('100cqh')}
              fit={fit}
            >
              {blur && <Blur blur={blur} />}
            </SkiaImage>
          </Canvas>
        )
      }}
    </View>
  )
}
