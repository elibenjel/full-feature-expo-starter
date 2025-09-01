import LottieView from 'lottie-react-native'

import * as React from 'react'

import { TransitionProps } from '../../types'

interface AfterProps extends React.PropsWithChildren {
  lottieSrc: string
  onAnimationLoaded: () => void
}

const After = ({
  children,
  in: _in,
  delay,
  lottieSrc,
  onAnimationLoaded,
  onAnimationFinished,
}: AfterProps & Partial<TransitionProps<number>>) => {
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(false)
  const [hideAnimation, setHideAnimation] = React.useState(false)

  return _in ? (
    <React.Fragment>
      {isAnimationFinished ? children : null}
      {!hideAnimation ? (
        <LottieView
          autoPlay
          loop={false}
          source={lottieSrc}
          onAnimationLoaded={onAnimationLoaded}
          onAnimationFinish={() => {
            onAnimationFinished?.()
            setIsAnimationFinished(true)
            setTimeout(() => {
              setHideAnimation(true)
            }, delay)
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
          }}
        />
      ) : null}
    </React.Fragment>
  ) : null
}

export default After
