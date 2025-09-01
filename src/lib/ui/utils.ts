import { Dimensions } from 'react-native'

import {
  ContainerHeightRatio,
  ContainerMaxRatio,
  ContainerMinRatio,
  ContainerRatio,
  ContainerWidthRatio,
  ScreenHeightRatio,
  ScreenRatio,
  ScreenWidthRatio,
} from './types'

const numberRegexp = /(-?\d*\.?\d+(?:[eE][-+]?\d+)?)/
export const DimensionValueUtils = {
  screenRatioRegexp: new RegExp(`${numberRegexp.source}(vw|vh)`),
  parentRatioRegexp: new RegExp(`${numberRegexp.source}(pw|ph)`),
  containerRatioRegexp: new RegExp(`${numberRegexp.source}(cqw|cqh|cqmin|cqmax)`),
  isScreenRatio: function (s: unknown): s is ScreenRatio {
    return typeof s === 'string' && this.screenRatioRegexp.test(s)
  },
  isScreenWidthRatio: function (s: unknown): s is ScreenWidthRatio {
    return this.isScreenRatio(s) && s.endsWith('vw')
  },
  isScreenHeightRatio: function (s: unknown): s is ScreenHeightRatio {
    return this.isScreenRatio(s) && s.endsWith('vh')
  },
  isContainerRatio: function (s: unknown): s is ContainerRatio {
    return typeof s === 'string' && this.containerRatioRegexp.test(s)
  },
  isContainerWidthRatio: function (s: unknown): s is ContainerWidthRatio {
    return this.isContainerRatio(s) && s.endsWith('cqw')
  },
  isContainerHeightRatio: function (s: unknown): s is ContainerHeightRatio {
    return this.isContainerRatio(s) && s.endsWith('cqh')
  },
  isContainerMinRatio: function (s: unknown): s is ContainerMinRatio {
    return this.isContainerRatio(s) && s.endsWith('cqmin')
  },
  isContainerMaxRatio: function (s: unknown): s is ContainerMaxRatio {
    return this.isContainerRatio(s) && s.endsWith('cqmax')
  },
  parseScreenRatio: function (dimension: ScreenRatio) {
    if (!this.isScreenRatio(dimension)) {
      throw new Error(`Invalid screen ratio: ${dimension}`)
    }

    const [, ratio, unit] = dimension.match(this.screenRatioRegexp) as [
      unknown,
      string,
      'vw' | 'vh',
    ]
    return (
      (parseFloat(ratio) *
        (unit === 'vw' ? Dimensions.get('window').width : Dimensions.get('window').height)) /
      100
    )
  },
  parseContainerRatio: function (
    dimension: ContainerRatio,
    containerWidth: number,
    containerHeight: number
  ) {
    if (!this.isContainerRatio(dimension)) {
      throw new Error(`Invalid container ratio: ${dimension}`)
    }

    const [, ratio, unit] = dimension.match(this.containerRatioRegexp) as [
      unknown,
      string,
      'cqw' | 'cqh' | 'cqmin' | 'cqmax',
    ]

    switch (unit) {
      case 'cqw':
        return (parseFloat(ratio) * containerWidth) / 100
      case 'cqh':
        return (parseFloat(ratio) * containerHeight) / 100
      case 'cqmin':
        return (parseFloat(ratio) * Math.min(containerWidth, containerHeight)) / 100
      case 'cqmax':
        return (parseFloat(ratio) * Math.max(containerWidth, containerHeight)) / 100
      default:
        throw new Error(`Invalid container ratio unit: ${unit}`)
    }
  },
}

export const LengthSpanUtils = {
  attributes: {
    vertical: {
      length: 'height',
      span: 'width',
      translateL: 'translateY',
      translateS: 'translateX',
      l: 'y',
      s: 'x',
      startL: 'top',
      endL: 'bottom',
      startS: 'left',
      endS: 'right',
    },
    horizontal: {
      length: 'width',
      span: 'height',
      translateL: 'translateX',
      translateS: 'translateY',
      l: 'x',
      s: 'y',
      startL: 'left',
      endL: 'right',
      startS: 'top',
      endS: 'bottom',
    },
  } as const,
}

export const dim = (dimension: ScreenRatio) => {
  try {
    return DimensionValueUtils.parseScreenRatio(dimension)
  } catch (error) {
    console.warn(error)
    return 0
  }
}
