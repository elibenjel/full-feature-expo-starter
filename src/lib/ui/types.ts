import { EasingFunction } from 'react-native-reanimated'

export type ScreenHeightRatio = `${number}vh`
export type ScreenWidthRatio = `${number}vw`
export type ScreenRatio = ScreenHeightRatio | ScreenWidthRatio
export type ContainerWidthRatio = `${number}cqw`
export type ContainerHeightRatio = `${number}cqh`
export type ContainerMinRatio = `${number}cqmin`
export type ContainerMaxRatio = `${number}cqmax`
export type ContainerRatio =
  | ContainerWidthRatio
  | ContainerHeightRatio
  | ContainerMinRatio
  | ContainerMaxRatio
export type ExtendedDimensions = ScreenRatio | ContainerRatio
export type WithExtendedDimensions<T> = T | ExtendedDimensions

export type SystemColor =
  | 'grey1'
  | 'grey5'
  | 'grey10'
  | 'grey20'
  | 'grey30'
  | 'grey40'
  | 'grey50'
  | 'grey60'
  | 'grey70'
  | 'grey80'
  | 'blue1'
  | 'blue5'
  | 'blue10'
  | 'blue20'
  | 'blue30'
  | 'blue40'
  | 'blue50'
  | 'blue60'
  | 'blue70'
  | 'blue80'
  | 'cyan10'
  | 'cyan20'
  | 'cyan30'
  | 'cyan40'
  | 'cyan50'
  | 'cyan60'
  | 'cyan70'
  | 'cyan80'
  | 'green1'
  | 'green5'
  | 'green10'
  | 'green20'
  | 'green30'
  | 'green40'
  | 'green50'
  | 'green60'
  | 'green70'
  | 'green80'
  | 'yellow1'
  | 'yellow5'
  | 'yellow10'
  | 'yellow20'
  | 'yellow30'
  | 'yellow40'
  | 'yellow50'
  | 'yellow60'
  | 'yellow70'
  | 'yellow80'
  | 'violet40'
  | 'violet50'
  | 'violet60'
  | 'violet70'
  | 'violet80'
  | 'white'
  | 'black'
  | 'dark'
  | 'transparent'

export type DesignToken =
  | '$backgroundDefault'
  | '$backgroundElevated'
  | '$backgroundElevatedLight'
  | '$backgroundNeutralHeavy'
  | '$backgroundNeutralIdle'
  | '$backgroundNeutralMedium'
  | '$backgroundNeutral'
  | '$backgroundNeutralLight'
  | '$backgroundPrimaryHeavy'
  | '$backgroundPrimaryMedium'
  | '$backgroundPrimaryLight'
  | '$backgroundGeneralHeavy'
  | '$backgroundGeneralMedium'
  | '$backgroundGeneralLight'
  | '$backgroundSuccessHeavy'
  | '$backgroundSuccessLight'
  | '$backgroundWarningHeavy'
  | '$backgroundWarningLight'
  | '$backgroundMajorLight'
  | '$backgroundMajorHeavy'
  | '$backgroundDangerHeavy'
  | '$backgroundDangerLight'
  | '$backgroundDisabled'
  | '$backgroundDark'
  | '$backgroundDarkElevated'
  | '$backgroundDarkActive'
  | '$backgroundInverted'
  | '$textDisabled'
  | '$textDefault'
  | '$textNeutralHeavy'
  | '$textNeutral'
  | '$textNeutralLight'
  | '$textDefaultLight'
  | '$textPrimary'
  | '$textGeneral'
  | '$textSuccess'
  | '$textSuccessLight'
  | '$textMajor'
  | '$textDanger'
  | '$textDangerLight'
  | '$iconDefault'
  | '$iconNeutral'
  | '$iconDefaultLight'
  | '$iconPrimary'
  | '$iconPrimaryLight'
  | '$iconGeneral'
  | '$iconGeneralLight'
  | '$iconSuccess'
  | '$iconSuccessLight'
  | '$iconMajor'
  | '$iconDanger'
  | '$iconDangerLight'
  | '$iconDisabled'
  | '$outlineDefault'
  | '$outlineDisabled'
  | '$outlineDisabledHeavy'
  | '$outlineNeutral'
  | '$outlineNeutralHeavy'
  | '$outlinePrimary'
  | '$outlinePrimaryMedium'
  | '$outlineGeneral'
  | '$outlineWarning'
  | '$outlineDanger'
  | '$outlineInverted'
  | '$black'
  | '$white'

export type Color = SystemColor | DesignToken

export interface Choice<T> {
  type: 'object'
  object: T
  picked: boolean
  getLabel: () => string
}

export interface TransitionProps<T extends number | string> {
  start: T
  end: T
  in: boolean
  easing?: EasingFunction
  duration?: number
  delay?: number
  onAnimationFinished?: () => void
  disablePointerEventsWhenTransitioning?: boolean
}

export interface Labeled<T> {
  label: string
  item: T
}

export interface Pickable<T> extends Labeled<T> {
  id: string
}
